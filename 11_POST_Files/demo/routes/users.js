var express = require('express');
var userRouter = express.Router();

var log = require('log-util');
var flash = require('connect-flash');

// init Flash
userRouter.use(flash());  

// User Routes
userRouter.get('/register', (req, res) => {
  res.render('register.hbs', {
    pageTitle: 'Register',
    flashMsg: req.flash('RegistrationFailedError')
  });
});

userRouter.get('/login', (req, res) => {
  res.render('login.hbs', {
    pageTitle: 'Login',
    flashMsg: req.flash('LoginFailedError')
  });
});

userRouter.get('/logout', (req, res) => {
  // invalidate username in session - until next login
  req.session.username = null;
  res.render('index.hbs', {pageTitle: 'Hike-a-Log'});
});

userRouter.get('/blog', (req, res) => {
  // Validate we have username in session - set in login
  var username = req.session.username;
  if (username) {
    res.render('blog.hbs', {
      pageTitle: 'Blog',
      blogData: req.session.blogdata,
      flashMsg: req.flash('BlogPostFailedError')
    });
  } else {
    log.error('Error: Attempt to access Blog without username.');
    res.status(500).redirect('/error.html');
  }
});

module.exports = userRouter;