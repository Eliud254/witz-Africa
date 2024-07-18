const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  loanType: { type: String, required: true },
  itemValue: { type: Number, required: true },
  downpayment: { type: Number, required: true },
  loanTerm: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Loan = mongoose.model('Loan', loanSchema);
module.exports = Loan;
