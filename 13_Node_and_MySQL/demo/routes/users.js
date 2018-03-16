var express = require('express');
var userRouter = express.Router();

var dbConn = require('./../inc/db_connection');
var dbQuery	= require('./../inc/db_queries');

// login
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

module.exports = userRouter;
