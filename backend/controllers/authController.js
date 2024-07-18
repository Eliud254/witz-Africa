const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).send({ error: 'Error registering user' });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).send({ error: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.send({ token });
  } catch (error) {
    res.status(400).send({ error: 'Error signing in' });
  }
};
