const express = require('express');
const { register, login, verifyEmail } = require('../controllers/authController');

const router = express.Router();

// Register user
router.post('/register', register);

// Login user
router.post('/login', login);

// Verify email
router.get('/verify-email', verifyEmail);

module.exports = router;
