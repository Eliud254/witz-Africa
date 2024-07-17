const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    duration: { type: String, required: true },
    status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Loan', LoanSchema);
