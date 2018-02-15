const EventEmitter = require('events');

// Create UserEmitter Class
class UserEmitter extends EventEmitter {
  checkUserName(url, query) {
    if (url.includes("/username")) {
      console.log('Emitting userName Event');
      var userName = query.name;

      if (userName === undefined || userName === '') {
        userName = 'UserName not provided.';
      }

      this.emit('user', userName);
    }
  }
}

// Export new UserEmitter Class
module.exports = new UserEmitter();
