const Exam = require("../models/exam.js");

async function createExam(data) {
  const exam = new Exam(data);
  return await exam.save();
}

async function getExamById(id) {
  return await Exam.findById(id);
}

async function getAllExams() {
  return await Exam.find();
}

module.exports = {
  createExam,
  getExamById,
  getAllExams,
};
