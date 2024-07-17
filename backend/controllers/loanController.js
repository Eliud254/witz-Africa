const Loan = require('../models/Loan');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

exports.applyLoan = async (req, res) => {
    const { userId, amount, duration } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        if (!user.isVerified) {
            return res.status(400).json({ message: 'Please verify your email before applying for a loan' });
        }

        const loan = new Loan({ userId, amount, duration });
        await loan.save();

        await sendEmail(user.email, 'Loan Application Received', `Dear ${user.name}, your loan application has been received. We will contact you shortly.`);

        res.status(201).json({ message: 'Loan application submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
