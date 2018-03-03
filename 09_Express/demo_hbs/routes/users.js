const express = require('express');
const userRouter = express.Router();

const authorization = require('./../utils/auth');

userRouter.post('/', function(request, response) {
    // get user data from form
    var email = request.body.email;
    var password = request.body.password;
    if (authorization.auth.authorize(email, password)) {
        response.statusCode = 200;
        response.end();
    } else {
        response.statusCode = 403; // Forbidden
        response.end();
    }
});

module.exports = userRouter;
