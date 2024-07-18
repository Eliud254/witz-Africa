const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'eliudobure@gmail.com',
      pass: '1234567', 
    },
  });

  const mailOptions = {
    from: 'eliudobure@gmail.com',
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
