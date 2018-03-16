const express = require('express');
const bodyParser = require('body-parser');

// include routes
const users = require('./routes/users');

const PORT = 3000;

var app = express();

// enable CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use routes
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    res.json(
        {
            'success' : false,
            'msg'     : `${err.status}: ${err.message}.`
        }
    );
});

app.listen(PORT, () => {
    console.log(`Express Server listening on http://localhost:${PORT}`);
});
