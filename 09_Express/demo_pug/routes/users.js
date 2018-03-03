const express = require('express');
var router = express.Router();

router.get('/login', (req, res, next) => {
  res.render('login');
});
router.post('/dashboard', (req, res, next) => {
  res.render('dashboard');
});
router.get('/logout', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
