var express    = require('express');
var mountains  = require('../controllers/mountainController');
var router     = express.Router();
 
router.get('/', mountains.list);
router.post('/create', mountains.create);
router.get('/:mountain_id', mountains.read);
router.post('/update/:mountain_id', mountains.update);
router.get('/delete/:mountain_id', mountains.delete);

module.exports = router;
