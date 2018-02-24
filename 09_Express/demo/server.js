// nodemon server.js -e js,hbs

// require modules
const fs = require('fs');

const express = require('express');
const hbs = require('hbs');
const logger = require('logger').createLogger('server.log');

const port = 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// middleware
app.use(express.static(__dirname + '/public'));
// http://localhost:3000/about.html

// custom middleware
app.use((req, res, next) => {
    var now = new Date().toString();
    logger.info(`${now}: ${req.method} ${req.url}`);
    next(); 
});

// register HBS helper used in /views/partials/footer.hbs
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

// routes
// http://localhost:3000
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express!</h1>');
});
// http://localhost:3000/user
app.get('/user', (req, res) => {
    res.send({userName: 'FooBar', admin: false});
});
// http://localhost:3000/data
app.get('/data', (req, res) => {
    res.end(fs.readFileSync(`${__dirname}/public/data.json`)); 
});


// HBS
// http://localhost:3000/contact
app.get('/contact', (req, res) => {
    res.render('contact.hbs', {
            pageTitle: 'Contact'
    });
});


app.listen(port, () => {
    console.log(`Express Server listening on http://localhost:${port}`);
});
