const express = require("express");
const app = express();
const examRouter = require("./routers/exam");
const cors = require("cors");
const connectDB = require("./services/db");
connectDB();
// CORS config
app.use(
  cors({
    origin: "*", // hoặc origin: 'http://localhost:3000' nếu bạn muốn giới hạn
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json()); // để đọc req.body dạng JSON

// Mount router
app.use("/api/exam", examRouter);

app.listen(5000, () => {
  console.log("Server chạy tại http://localhost:5000");
});
