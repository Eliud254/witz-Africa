const Loan = require('../models/Loan');
const sendEmail = require('../utils/sendEmail');

// Apply for a loan
exports.applyLoan = async (req, res) => {
  try {
    const { userId, loanType, amount, term, mpesaStatement } = req.body;

    const loan = new Loan({
      user: userId,
      loanType,
      amount,
      term,
      mpesaStatement,
    });

    await loan.save();

    await sendEmail({
      to: req.user.email,
      subject: 'Loan Application Received',
      text: `Your loan application for ${loanType} has been received. Our agent will contact you soon.`,
    });

    res.status(201).json({ message: 'Loan application submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user loans
exports.getUserLoans = async (req, res) => {
  try {
    const loans = await Loan.find({ user: req.user.id });

    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
