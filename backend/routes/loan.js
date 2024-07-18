const express = require('express');
const { applyForLoan } = require('../controllers/loanController');
const router = express.Router();

router.post('/apply', applyForLoan);

module.exports = router;
