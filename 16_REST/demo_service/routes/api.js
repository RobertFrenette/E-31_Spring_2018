var express  = require('express');
var api      = require('../controllers/apiController');
var router   = express.Router();

// Preflight Middleware
router.use((req, res, next) => {
  res.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
  });
  // check for Preflight
  if(req.method === 'OPTIONS'){
    return res.status(200).end();
  }
  next();
});

// router.REST_VERB('EXPRESS_ROUTE', mountains.ACTION)
router.get('/', api.list); // read all Mountains
router.post('/create', api.create); // create new Mountain
router.get('/:mountain_id', api.read); // read a specific Mountain
router.put('/update/:mountain_id', api.update); // update a specific Mountain
router.delete('/delete/:mountain_id', api.delete); // delete a specific Mountain

module.exports = router;
