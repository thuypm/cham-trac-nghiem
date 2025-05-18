const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  _id: String, // bạn có thể thay bằng ObjectId nếu cần
  name: String,
  classId: String,
  numOfPartOne: Number,
  scorePartOne: Number,
  numOfPartTWo: Number,
  scorePartTwo: Number,
  scorePartThree: Number,
  answers: Array,
  assignments: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Exam", examSchema);
