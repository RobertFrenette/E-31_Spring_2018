var path = require('path');

var express = require('express');
var hbs = require('hbs');
var favicon = require('serve-favicon');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

var index = require('./routes/index');
var users = require('./routes/users');
var auth = require('./routes/auth');

var app = express();

app.use(cookieParser('hikealog-secret'));
app.use(session({
  secret:"hikealog",
  resave: "true",
  saveUninitialized: "true"
}));

// register HBS partials
hbs.registerPartials(__dirname + '/views/partials');

// register HBS helper
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public/img/', 'favicon.ico')));

app.use('/', index);
app.use('/users', users);
app.use('/auth', auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).redirect('/404.html');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
