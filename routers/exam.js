const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const {
  createExam,
  getAllExams,
  getExamById,
  readExcelFile,
} = require("../services/examServices");
const { ObjectId } = require("mongodb");
const router = express.Router();

// Cấu hình multer để lưu file PDF vào thư mục 'uploads'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "../uploads";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage: storage,
  // fileFilter: (req, file, cb) => {
  //   // Chỉ chấp nhận file PDF
  //   if (file.mimetype === "application/pdf") cb(null, true);
  //   else cb(new Error("Chỉ chấp nhận file PDF"));
  // },
});
router.post("/", async (req, res) => {
  const {
    name,
    classId,
    numOfPartOne,
    scorePartOne,
    numOfPartTwo,
    scorePartTwo,
    scorePartThree,
    answers,
  } = req.body;
  const data = await createExam({
    name,
    classId,
    numOfPartOne,
    scorePartOne,
    numOfPartTwo,
    scorePartTwo,
    scorePartThree,
    answers,
  });
  res.json(data);
});
router.get("/", async (req, res) => {
  const data = await getAllExams();
  res.json(data);
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getExamById(id); // Gọi hàm đúng theo id
  if (!data) {
    return res.status(404).json({ message: "Exam not found" });
  }
  res.json(data);
});
// Route POST /exam
router.post("/upload-exam", upload.single("file"), (req, res) => {
  const { _id, classId } = req.body;
  const file = req.file;
  if (!_id || !classId || !file) {
    return res.status(400).json({ error: "Missing field" });
  }
});

router.post("/upload-answer", upload.single("file"), async (req, res) => {
  const { examId, classId } = req.body;
  const file = req.file;

  // if (!_id || !classId || !file) {
  //   return res.status(400).json({ error: "Missing field" });
  // }

  try {
    const data = await readExcelFile(file.path, new ObjectId(examId));

    // Xóa file sau khi đọc xong
    fs.unlinkSync(file.path);

    return res.json({
      success: true,
      examId: examId,
      classId,
      data,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to read Excel file" });
  }
});

module.exports = router;
