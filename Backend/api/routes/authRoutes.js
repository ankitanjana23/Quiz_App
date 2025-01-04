const express = require("express");
const { loginUser, signupUser, logoutUser } = require("../controllers/authController");

const router = express.Router();

// Routes
router.post("/signup", signupUser); // No validation middleware
router.post("/login", loginUser);    // No validation middleware
router.post("/logout", logoutUser);

module.exports = router;
