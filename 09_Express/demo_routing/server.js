// nodemon server.js
const http = require('http');

const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

// include routes
const users = require('./routes/users');

var app = express();

// register hbs partials
hbs.registerPartials(__dirname + '/views/partials');
// set view engine
app.set('view engine', 'hbs');

// partials
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use routes
app.use('/users', users);

app.get('/login', (request, response) => {
    response.render('login.hbs', {pageTitle: 'Login'});
});

// Error-handling middleware 
// Handle http 404 response
app.use((request, response, next) => {
    response.status(404).redirect('/404.html');
});
// Handle 500 response
app.use((request, response, next) => {
    response.status(500).redirect('/error.html');
});

const port = 3000;
const server = http.createServer(app).listen(port);

server.on('listening', () => {
	console.log(`Server Listening on ${server.address().port}`);
});