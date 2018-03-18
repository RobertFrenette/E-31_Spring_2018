var express = require('express');
var authRouter = express.Router();

// Mongoose Models
const {User} = require('./../models/user');
const {Hike} = require('./../models/hike');

var multer = require('multer');
var flash = require('connect-flash');
var log = require('log-util');

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

  var user = new User({
    username: username,
    email: email,
    password: password
  });

  User.find()
  .and([
      { $or: [{username: username}, {email: email}] }
  ])
  .exec((err, u) => {
    if (err) { 
      log.error(`Registration Error: ${err}`);
      next(new Error('RegistrationFailedError', false));
    } else {
      if (u.length === 0) {
        // User does not exist
        user.save().then((u) => {
          log.info(`Registration Successful for User: ${username}`);
          res.redirect('/users/login');
        }, (err) => {
          log.error(`Registration Error: ${err}`);
          next(new Error('RegistrationFailedError', false));
        });
      } else {
        // User already registered
        log.error(`Registration Error: User with creds ${username} and/or ${email}, ${password} already registered.`);
        next(new Error('RegistrationFailedError', false));
      }
    }
  });
});

// User Login
authRouter.post('/login', (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  log.info(`Login: ${username}, ${password}`);

  User.find({username: username, password: password}).then((users) => {
    if (users.length > 0) {
      log.info(`Login Successful for User: ${username}`);
      
      // put username in session - validate on Blog page
      req.session.username = username;
      ////req.session.blogdata = blog_persist.getBlog(username);
      res.redirect('/users/blog');
    } else {
      log.info(`Login Unsucessful for User: ${username}, ${password}`);
      next(new Error('LoginFailedError', false));  
    }
  }, (err) => {
    log.error(`Login Error: ${err}`);
    next(new Error('LoginFailedError', false));
  });
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

    var hike = new Hike({
      username: username,
      hikename: hikename,
      hikediff: hikediff,
      hikedesc: hikedesc,
      imageurl: imageurl
    });

    Hike.find()
    .where('username').equals(username)
    .where('hikename').equals(hikename)
    .exec((err, hikes) => {
      if (err) { 
        log.error(`Error finding Hike: ${hikename}`);
        next(new Error('BlogPostFailedError', false));
      } else {
        if (hikes.length === 0) {
          // Hike with this name does not exist
          hike.save().then((h) => {
            log.info(`BlogPost Successful for User: ${username}, ${hikename}`);
            ////req.session.blogdata = blog;
            res.redirect('/users/blog');
          }, (err) => {
            log.error(`BlogPost  Error: ${err}`);
            next(new Error('BlogPostFailedError', false));
          });
        } else {
          // Duplicte Hike name found
          log.error(`BlogPost Error: Hike with name ${hikename} already exists for user ${username}`);
          next(new Error('BlogPostFailedError', false));
        }
      }
    });
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