var express = require('express');
var authRouter = express.Router();

var multer = require('multer');
var flash = require('connect-flash');
var log = require('log-util');

// Include Custom Modules
var user_persist = require('./../utils/user_persist');
var blog_persist = require('./../utils/blog_persist');

// init Flash
authRouter.use(flash());  

// Upload Object
var upload = multer({dest: 'public/uploads/'});

// Register a User
authRouter.post('/register', (req, res, next) => {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  log.info(`Register: ${username}, ${email}, ${password}`);

  var user = user_persist.addUser(username, email, password);
  if (user) {
    res.redirect('/users/login');
  } else {
    next(new Error('RegistrationFailedError', false));
  }
});

// User Login
authRouter.post('/login', (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  log.info(`Login: ${username}, ${password}`);

  var user = user_persist.authenticate(username, password);
  if (user) {
    // put username in session - validate on Blog page
    req.session.username = username;
    req.session.blogdata = blog_persist.getBlog(username);
    res.redirect('/users/blog');
  } else {
    next(new Error('LoginFailedError', false));
  }
});

// Blog Entry w/ File Upload
authRouter.post('/blog', upload.single('imageurl'), (req, res, next) => {
  // Validate we have username in session - set in login
  var username = req.session.username;
  if (username) {
    var hikename = req.body.hikename;
    var hikediff = req.body.hikediff;
    var hikedesc = req.body.hikedesc;
    var imageurl = '';
    // check to see if iamge was uploaded
    try {
      if (req.file.filename) {
        imageurl = `/uploads/${req.file.filename}`;
      }
    } catch(e) {
      imageurl = '/img/default.jpg';
    }
    log.info(`Blog Post: ${username}, ${hikename}, ${hikediff}, ${hikedesc}, ${imageurl}`);

    var blog = blog_persist.addHike(username, {"hikename": hikename, "hikediff": hikediff, "imageurl": imageurl, "hikedesc": hikedesc});
    if (blog) {
      req.session.blogdata = blog;
      res.redirect('/users/blog');
    } else {
      next(new Error('BlogPostFailedError', false));
    }
  } else {
    log.error('Error: Attempt to post Blog entry without username.');
    res.status(500).redirect('/error.html');
  }
});

// Specific Hike
authRouter.get('/hike/:id', (req, res, next) => {
  // Validate we have username in session - set in login
  var username = req.session.username;
  if (username) {
    // validate we have a hike id
    var id = req.params.id;
    if (! isNaN(parseInt(id))) {
      var theHike = blog_persist.getHike(username, parseInt(id));
      res.render('hike.hbs', {
        pageTitle: 'Hike',
        hikeData: {
                    hikename: theHike[0].hikename,
                    hikediff: theHike[0].hikediff,
                    hikedesc: theHike[0].hikedesc,
                    imageurl: theHike[0].imageurl
                  },
        flashMsg: req.flash('HikeDetailsFailedError')
      });
    } else {
      next(new Error('BlogPostFailedError', false));
    }
  } else {
    log.error('Error: Attempt to access Hike without username.');
    res.status(500).redirect('/error.html');
  }
});

// Error Route
authRouter.use((err, req, res, next) => {
  if (err.message === "RegistrationFailedError") {
    log.error('RegistrationFailedError: Registration unsuccessful.');
    req.flash('RegistrationFailedError', 'Registration unsuccessful.');
    res.redirect('/users/register');
  } else if (err.message === "LoginFailedError") {
    log.error('LoginFailedError: Login unsuccessful.');
    req.flash('LoginFailedError', "Login unsuccessful.");
    res.redirect('/users/login');
  } else if (err.message === "BlogPostFailedError") {
    log.error('BlogPostFailedError: Blog Post unsuccessful.');
    req.flash('BlogPostFailedError', "Blog Post unsuccessful.");
    res.redirect('/users/blog');
  } else if (err.message === "HikeDetailsFailedError") {
    log.error('HikeDetailsFailedError: HikeDetailsFailedError unsuccessful.');
    req.flash('HikeDetailsFailedError', 'HikeDetailsFailedError unsuccessful.');
    res.redirect('/users/blog/');
  } else {
    next(err);
  }
});

module.exports = authRouter;