/*
 * Tests:
 *      node app.js insert --name="Mt. Washington" --elev="6,288"
 *      node app.js delete --name="Mt. Washington" --elev="6,288"
 *      node app.js --name="Mt. Washington" --elev="6,288"
 *      node app.js insert --name="Mt. Washington" --elev="6,288"
 */ 

// require Node's built-in Modules
const os = require('os');

// require third-party Modules
const logger = require('logger').createLogger('log.txt');
const yargs = require('yargs');

// require custom Module
const mountains = require('./mountains');

// Get user info from OS
var user = os.userInfo();

// Get User input
var command = process.argv[2];
var args = yargs.argv;
var mountainName = args.name;
var mountainElevation = args.elev;

var logStatus = 'Failure';
var logMsg = '';

// validate data
if (command.match(/-/g)) {
    // no command sent: node app.js --name="Mt. Washington" --elev="6,288"
    logMsg = 'Command not found';
} else if (command !== 'insert') {
    // bad command sent: node app.js delete --name="Mt. Washington" --elev="6,288"
    logMsg = `Command (${command}) not able to be processed`;
} else if (mountainName !== undefined && mountainElevation !== undefined) {
    // Good: node app.js insert --name="Mt. Washington" --elev="6,288"
    var mountain = mountains.mountain.insertMountain(mountainName, mountainElevation);
    if (mountain) {
        logStatus = 'Success';
        logMsg = `${mountainName}, ${mountainElevation}`;
        console.log(`Mountain Created: ${mountain.name} ${mountain.elev}!`);
    } else {
        logMsg = `Mountain not created: Duplicate mountain (${mountainName}) found`;
        console.log(`Mountain not created: Duplicate mountain (${mountainName}) found!`);
    }
    
} else {
    // missing mountain data: node app.js insert  --elev="6,288"
    logMsg = 'Missing Mountain Data param(s)';
}

// Write log file
logger.info('App accessed by', `${user.username}: ${logStatus} - ${logMsg}.`);
