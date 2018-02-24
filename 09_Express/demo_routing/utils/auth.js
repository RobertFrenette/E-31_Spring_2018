// Note: email and password values hard-coded for demo only!
var auth = {
  users: [
    {
      "email": "foobar@test.com",
      "password": "password"
    }
  ],
  authorize: function (email, password) {
    var validUser = this.users.filter((user) => {
      return user.email === email && user.password === password;
    });

    if (validUser.length === 1) {
      return true;
    }
    return false;
  }
};

module.exports = {
  auth
};
