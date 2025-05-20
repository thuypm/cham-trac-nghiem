const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  name: String,
  classId: String,
  numOfPartOne: Number,
  scorePartOne: Number,
  numOfPartTwo: Number,
  scorePartTwo: Array,
  numOfPartThree: Number,
  scorePartThree: Number,
  answers: Array,
  assignments: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Exam", examSchema);
