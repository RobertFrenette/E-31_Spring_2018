var express  = require('express');
var api      = require('../controllers/apiController');
var router   = express.Router();
 
// router.REST_VERB('EXPRESS_ROUTE', mountains.ACTION)
router.get('/', api.list); // read all Mountains
router.post('/create', api.create); // create new Mountain
router.get('/:mountain_id', api.read); // read a specific Mountain
router.put('/update/:mountain_id', api.update); // update a specific Mountain
router.delete('/delete/:mountain_id', api.delete); // delete a specific Mountain

module.exports = router;
