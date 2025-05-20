const Exam = require("../models/exam.js");

async function createExam(data) {
  const exam = await Exam.create(data);
  return exam;
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
