const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  title: String,
  questions: [
    {
      question: String,
      options: [String],
      answer: String,
    },
  ],
  timeLimit: Number,
});

module.exports = mongoose.model("Quiz", QuizSchema);
