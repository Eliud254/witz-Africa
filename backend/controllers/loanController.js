const Loan = require('../models/Loan');
const sendEmail = require('../utils/sendEmail');

exports.applyForLoan = async (req, res) => {
  const { user, loanType, itemValue, downpayment, loanTerm, email } = req.body;
  try {
    const loan = new Loan({ user, loanType, itemValue, downpayment, loanTerm });
    await loan.save();
    await sendEmail(email, 'Loan Application Received', `Your loan application for ${loanType} has been received.`);
    res.status(201).send({ message: 'Loan application submitted successfully' });
  } catch (error) {
    res.status(400).send({ error: 'Error submitting loan application' });
  }
};

