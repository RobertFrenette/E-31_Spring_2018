const mongoose = require('mongoose');
require('dotenv').config();

const DB_NAME = 'demo';
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_USER_PWD}@cluster0-shard-00-00-rvadh.mongodb.net:27017,cluster0-shard-00-01-rvadh.mongodb.net:27017,cluster0-shard-00-02-rvadh.mongodb.net:27017/${DB_NAME}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`);
var db = mongoose.connection;

db.on('open', () => {
  console.log('Connected to DB...');

  // Mongoose DB Schema for a User
  var userSchema = mongoose.Schema({
    user_name: {type: String, required: true},
    user_password: {type: String, required:true}
  });
  
  // Map Schema (userSchema) to Collection (Users) in DB
  // Create a Mongoose Model for User, using User DB Collection (Users)
  var User = mongoose.model('User', userSchema);
  var user = new User({
    user_name: 'Admin',
    user_password: 'password'
  });

  // Persist User in DB - CallBac funct
  user.save((err, u) => {
    if (err) {
      console.log(`Error: ${err}`);
    } 
    console.log('Persisted User:');
    console.log(u);

    // Find Users
    User.find({}, (err, users) => {
      if (err) {
        console.log('Error getting Users.');
      }
      console.log('Users:');
      console.log(users);
    });
  });
}).catch((err) => {
  // Ex: authentication fail
  console.log(`Error: ${err}`);
});
