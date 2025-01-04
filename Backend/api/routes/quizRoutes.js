const express = require("express");
const {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  submitQuiz,
  searchQuizzes,
} = require("../controllers/quizController");

const router = express.Router();

// Routes
router.post("/", createQuiz); // No validation middleware
router.get("/", getAllQuizzes);
router.get("/search", searchQuizzes);
router.get("/:id", getQuizById);
router.post("/:id/submit", submitQuiz);

module.exports = router;
