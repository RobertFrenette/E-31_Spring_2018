// node app.js

// require Node's built-in Modules
const os = require('os');
const fs = require('fs');

// require logger Module
const logger = require('logger').createLogger('log.txt');

let data = require('./data/data.json');
let mountains = data.mountains;

// Get user info from OS
let user = os.userInfo();
console.log(user);

// Write to log
logger.info(`App accessed by: ${user.username}!\n`);

Number.prototype.format = function(){
   return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

mountains.forEach((mountain, index) => {
  fs.appendFileSync('mountains.txt', `${index + 1}: ${mountain.name}, ${mountain.elevation.format()}'\n`);
}); 

