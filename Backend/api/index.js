require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const quizRoutes = require("./routes/quizRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "https://quiz-app-phi-orcin-21.vercel.app/",
    credentials: true, // If using cookies for authentication
  })
);


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Database connection error:", err));

// Routes
app.use("/api/quizzes", quizRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// module.exports = app; // Ensure the app is still exported for testing or other uses

