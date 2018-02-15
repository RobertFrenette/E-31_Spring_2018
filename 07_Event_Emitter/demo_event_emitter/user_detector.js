var UserEmitter = require('./user_emitter');

UserEmitter.on('user', (userName) => {
  console.log(`UserName Event emitted for: ${userName}!`);
});

module.exports = {};
