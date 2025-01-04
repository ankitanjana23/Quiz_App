const mongoose = require("mongoose");

const LeaderboardSchema = new mongoose.Schema({
  quizId: { type: String, required: true },
  username: { type: String, required: true },
  score: { type: Number, required: true },
});

module.exports = mongoose.model("Leaderboard", LeaderboardSchema);