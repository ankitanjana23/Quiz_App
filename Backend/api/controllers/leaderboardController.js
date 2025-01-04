const Leaderboard = require("../models/Leaderboard");
const Joi = require("joi");

// Validation schema for leaderboard entries
const leaderboardSchema = Joi.object({
  username: Joi.string().required(),
  score: Joi.number().required(),
});

// Fetch leaderboard data for a quiz (supports pagination and sorting)
exports.getLeaderboard = async (req, res) => {
  const { page = 1, limit = 10, sortBy = "score", order = -1 } = req.query;

  try {
    const leaderboard = await Leaderboard.find({ quizId: req.params.id })
      .sort({ [sortBy]: order })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.status(200).json(leaderboard);
  } catch (error) {
    console.error("Error fetching leaderboard:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Add or update a leaderboard entry
exports.updateLeaderboard = async (req, res) => {
  const { error } = leaderboardSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const { username, score } = req.body;

    // Check if an entry exists for the user in the quiz leaderboard
    const existingEntry = await Leaderboard.findOne({
      quizId: req.params.id,
      username,
    });

    let updatedEntry;
    if (existingEntry) {
      // Update score if higher
      updatedEntry = await Leaderboard.findOneAndUpdate(
        { quizId: req.params.id, username },
        { score: Math.max(existingEntry.score, score) },
        { new: true }
      );
    } else {
      // Create a new entry
      updatedEntry = await Leaderboard.create({
        quizId: req.params.id,
        username,
        score,
      });
    }

    res.status(201).json(updatedEntry);
  } catch (error) {
    console.error("Error updating leaderboard:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Delete leaderboard entry by ID
exports.deleteLeaderboardEntry = async (req, res) => {
  try {
    const deletedEntry = await Leaderboard.findByIdAndDelete(req.params.entryId);

    if (!deletedEntry) {
      return res.status(404).json({ error: "Leaderboard entry not found" });
    }

    res.status(200).json({ message: "Leaderboard entry deleted successfully" });
  } catch (error) {
    console.error("Error deleting leaderboard entry:", error.message);
    res.status(500).json({ error: error.message });
  }
};
