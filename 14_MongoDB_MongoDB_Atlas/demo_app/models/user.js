const mongoose = require('mongoose');

// User Schema
var User = mongoose.model('User', {
  username: {type: String, required: true},
  email: {type: String, required:true},
  password: {type: String, required:true}
});

module.exports = {
  User
};
