const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  _id: String, // bạn có thể thay bằng ObjectId nếu cần
  exactStudentId: String,
  exactKey: String,
  score: Number,
  studentName: String,
  emptyAnswers: Array,
  multiChoices: Array,
  key: Array,
  studentId: Array,
  partOne: Array,
  partTwo: Array,
  partThree: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Assignment", assignmentSchema);
