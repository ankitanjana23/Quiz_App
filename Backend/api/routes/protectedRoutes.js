const express = require('express');
const jwt = require('jsonwebtoken');
const { checkSchema } = require('express-validator');

const router = express.Router();
const secretKey = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token.' });

    req.user = user;
    next();
  });
};

router.use(authenticateToken);

router.get('/dashboard', (req, res) => {
  res.json({ message: `Welcome, ${req.user.name}!` });
});

module.exports = router;