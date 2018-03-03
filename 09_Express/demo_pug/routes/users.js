const express = require('express');
var router = express.Router();

// Demo of Param and QueryString
// http://localhost:3000/users/secret/mysecretkey?mysecretvalue=123
router.get('/secret/:key', (req, res, next) => {
  let key = req.params.key;           // mysecretkey
  let val = req.query.mysecretvalue;  // 123
  console.log(`${key} : ${val}`);

  res.render('secret', {"key" : key, "val": val});
});

router.get('/login', (req, res, next) => {
  // Access var set in app.js
  console.log(`req.app.locals.secretvalue: ${req.app.locals.secretvalue}`);
  
  // Try and access the var in this Route -undefined because it hasn't been set yet
  console.log(`res.locals.secretvalue: ${res.locals.secretvalue}`);
  // Set a var that is only accessible in this Route
  res.locals.secretvalue = 'FooBar';
  // Try and access the var in this Route again - after it has been set above
  console.log(`res.locals.secretvalue: ${res.locals.secretvalue}\n`);

  res.render('login');
});

router.post('/dashboard', (req, res, next) => {
  // Access var set in app.js -- still accessible since it was set at app.locals
  console.log(`req.app.locals.secretvalue: ${req.app.locals.secretvalue}`);

  // Try and access the var set in the get('/login') Route - not accessible
  console.log(`res.locals.secretvalue: ${res.locals.secretvalue}\n`);

  // Set a var that is only accessible in this Route
  res.locals.mysecretvalue = 'BizBaz';

  // Pass mysecretvalue to the template 
  res.render('dashboard', {"mysecretvalue": res.locals.mysecretvalue});
});

router.get('/logout', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
