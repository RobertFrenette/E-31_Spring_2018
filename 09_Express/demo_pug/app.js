const express = require('express');
const path = require('path');

const users = require('./routes/users');

// Create App
var app = express();

// Set a var that is accessible via the App
app.locals.secretvalue = "CSCIE-31";

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// User Routes
app.use('/users', users);

// Error-handling Middleware 
// Handle http 404 response
app.use((req, res, next) => {
  res.status(404).redirect('/404.html');
});
// Handle 500 response
app.use((req, res, next) => {
  res.status(500).redirect('/500.html');
});

module.exports = app;
