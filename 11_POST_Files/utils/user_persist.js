// This Module is for User persistence.

const fs = require('fs');

// read persisted data from file
var getUsers = () => {
    try {
        var usersString = fs.readFileSync('data/users.json');
        return JSON.parse(usersString);        
    } catch (err) {
        return [];
    }
};

// persist data in file
var saveUsers = (users) => {
    fs.writeFileSync('data/users.json', JSON.stringify(users));      
};

// Insert a User
var addUser = (username, email, password) => {
    var users = getUsers();
    
    var user = {
      username, 
      email, 
      password
    };
    
    // ensure no dups
    var duplicateUsers = users.filter((user) => {
        return user.username === username || user.email === email;
    });
    
    // persist the users
    if (duplicateUsers.length === 0) {
        users.push(user);
        saveUsers(users);
        return user;
    }
};

// Get a single User by username
var getUser = (username) => {
    var users = getUsers();
    var filteredUsers = users.filter((user) => user.username === username);
    return filteredUsers[0];
};

// Get a single User by username and password == Authenticate!
var authenticate = (username, password) => {
    var users = getUsers();
    var filteredUsers = users.filter((user) => user.username === username && user.password === password);
    return filteredUsers[0];
};

module.exports = {
  addUser,
  getUser,
  authenticate,
};