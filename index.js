const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

const { execFile } = require("child_process");

app.get("/scan", async (req, res) => {
  const imgDir = path.join(__dirname, "img");
  const files = fs.readdirSync(imgDir);
  const imageFile = files.find((f) => /\.(jpg|jpeg|png)$/i.test(f));
  if (!imageFile) return res.status(404).json({ error: "No image found" });

  const imgPath = path.join(imgDir, imageFile);
  const outPath = "./images/aligned.jpg";

  execFile(
    "python",
    ["./python/cropImage.py", imgPath, outPath],
    (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ error: stderr || error.message });
      }
      try {
        console.log(stdout);
        const result = JSON.parse(stdout);
        res.json(result);
      } catch (e) {
        res.status(500).json({ error: "Lỗi khi đọc kết quả từ Python" });
      }
    }
  );
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
