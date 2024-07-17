const express = require('express');
const { applyLoan, getLoanStatus } = require('../controllers/loanController');
const { isAuthenticated } = require('../middleware/auth');

const router = express.Router();

// Apply for a loan
router.post('/apply', isAuthenticated, applyLoan);

// Get loan status
router.get('/status', isAuthenticated, getLoanStatus);

module.exports = router;
