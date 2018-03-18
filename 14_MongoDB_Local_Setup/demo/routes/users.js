var express = require('express');
var userRouter = express.Router();

// READ
// GET: http://localhost:3000/users/
userRouter.get('/:user_id', function(req, res){
    res.json(
        {
            'success' : true,
            'msg'     : 'GET: Success'
        }
    );
});

// CREATE
// POST: http://localhost:3000/users/
userRouter.post('/', function(req, res){
    var userName = req.body.user_name;
    var userPassword = req.body.user_password;
    if (userName == null || userName == '' || userPassword == null || userPassword == '') {
        res.json(
            {
                'success' : false,
                'msg'     : 'Bad Input: Missing login data.'
            }
        );
    } else {
        dbConn.getDbConnection(dbQuery.postUserLogin, req, res);
    }
});

// PUT
// POST: http://localhost:3000/users/
userRouter.put('/', function(req, res){
    var user_id = req.body.user_id;
    var userPassword = req.body.user_password;
    if (userName == null || userName == '' || userPassword == null || userPassword == '') {
        res.json(
            {
                'success' : false,
                'msg'     : 'Bad Input: Missing login data.'
            }
        );
    } else {
        dbConn.getDbConnection(dbQuery.postUserLogin, req, res);
    }
});

// DELETE
// POST: http://localhost:3000/users/
userRouter.delete('/:user_id', function(req, res){
    res.json(
        {
            'success' : true,
            'msg'     : 'DELETE: Success'
        }
    );
});

module.exports = userRouter;