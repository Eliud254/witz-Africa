const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const loanRoutes = require('./routes/loan');
const app = express();

app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/loans', loanRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb+srv://witz:2024@witz.orf5w8o.mongodb.net/crud';

mongoose.connect(MONGO_URI).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error('Error connecting to MongoDB:', err));
