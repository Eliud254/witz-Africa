const express = require('express');
const { signup, verifyEmail, signin } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', signup);
router.post('/verify-email', verifyEmail);
router.post('/signin', signin);

module.exports = router;
