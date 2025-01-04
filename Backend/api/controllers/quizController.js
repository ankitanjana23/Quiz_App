const Quiz = require("../models/Quiz");

exports.createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllQuizzes = async (req, res) => {
  const { page = 1, limit = 10, sortBy = "title", order = 1 } = req.query;
  try {
    const quizzes = await Quiz.find()
      .sort({ [sortBy]: order })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ error: "Quiz not found" });
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.searchQuizzes = async (req, res) => {
  const { title = "" } = req.query;
  try {
    const quizzes = await Quiz.find({ title: { $regex: title, $options: "i" } });
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body;
    const quiz = await Quiz.findById(req.params.id);

    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        score += 100;
      } else if (answers[index] && question.answer.includes(answers[index])) {
        score += 50; // Partial match scoring
      }
    });

    res.status(200).json({ score });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit quiz" });
  }
};
