const express = require('express');
const routes = require('./routes/transaction');

const app = express();

app.use(express.json());
app.use('/api', routes);

module.exports = app;
