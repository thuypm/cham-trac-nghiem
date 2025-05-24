const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { handleScoring } = require("../services/assignmentServices");
const { ObjectId } = require("mongodb");
const { getAllAssignmentByExam } = require("../services/assignmentServices");
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
router.get("/:examId", async (req, res) => {
  const { examId } = req.params;
  const data = await getAllAssignmentByExam(examId);
  res.json(data);
});

// Route POST /exam
router.post("/upload-assignment", upload.single("file"), async (req, res) => {
  const { _id, examId } = req.body;
  const file = req.file;
  await handleScoring(file.path, examId);
  fs.unlinkSync(file.path);

  return res.json({ success: true });
});

module.exports = router;
