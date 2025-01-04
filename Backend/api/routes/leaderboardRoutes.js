const express = require("express");
const {
  getLeaderboard,
  updateLeaderboard,
  deleteLeaderboardEntry,
} = require("../controllers/leaderboardController");

const router = express.Router();

// Routes
router.get("/:id", getLeaderboard); // Fetch leaderboard for a quiz
router.post("/:id", updateLeaderboard); // Add or update leaderboard entry
router.delete("/:entryId", deleteLeaderboardEntry); // Delete a specific leaderboard entry

module.exports = router;
