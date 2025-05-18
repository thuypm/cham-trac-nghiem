const express = require("express");
const app = express();
const examRouter = require("./routers/exam");

app.use(express.json()); // để đọc req.body dạng JSON

// Mount router
app.use("/exam", examRouter);

app.listen(5000, () => {
  console.log("Server chạy tại http://localhost:5000");
});
