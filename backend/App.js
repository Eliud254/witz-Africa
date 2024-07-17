const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const loanRoutes = require('./routes/loan');

const app = express();

app.use(bodyParser.json());

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/loans', loanRoutes);

module.exports = app;
