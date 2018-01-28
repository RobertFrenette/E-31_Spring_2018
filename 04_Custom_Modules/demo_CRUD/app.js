/*
 * Tests: (happy path)
 *      node app.js create --name="Mt. Washington" --elev="6,288"
 *      node app.js read   --name="Mt. Washington"
 *      node app.js create --name="Mt. Adams" --elev="0,000"
 *      node app.js list
 *      node app.js update --name="Mt. Adams" --elev="5,799"
 *      node app.js read   --name="Mt. Adams"
 *      node app.js delete --name="Mt. Adams"
 *      node app.js list
 */ 

// require third-party Modules
const yargs = require('yargs');

// require custom Module
const mountains = require('./mountains');

// Get User input
var command = process.argv[2];
var args = yargs.argv;
var mountainName = args.name;
var mountainElevation = args.elev;

// validate data
if (command.match(/-/g)) {
    // no command sent
    console.log('Command not found!');
} else {
    // process command
    if (command === 'create') {
        if (mountainName !== undefined && mountainElevation !== undefined) {
            var mountain = mountains.insertMountain(mountainName, mountainElevation);
            if (mountain) {
                console.log(`Mountain Created: ${mountain.name} ${mountain.elev}.`);
            } else {
                console.log(`Mountain not created: Duplicate mountain (${mountainName}) found!`);
            }  
        } else {
            console.log('Missing Mountain Data param(s).');
        }
    } else if (command === 'read') {
        if (mountainName === undefined) {
            console.log('Missing Mountain name param.');
        } else {
            var mountain = mountains.getMountain(mountainName);
            if (mountain) {
                console.log(`Mountain: ${mountain.name} ${mountain.elev}.`);
            } else {
                console.log(`Mountain (${mountainName}) not found!`);
            }  
        }
    } else if (command === 'update') {
        if (mountainName !== undefined && mountainElevation !== undefined) {
            var mountain = mountains.updateMountain(mountainName, mountainElevation);
            if (mountain) {
                console.log(`Mountain Updated: ${mountain.name} ${mountain.elev}.`);
            } else {
                console.log(`Mountain (${mountainName}) not found!`);
            }  
        }  else {
            console.log('Missing Mountain Data param(s).');
        }
    } else if (command === 'delete') {
        if (mountainName === undefined) {
            console.log('Missing Mountain name param.');
        } else {
            var mountain = mountains.deleteMountain(mountainName);
            if (mountain) {
                console.log(`Mountain (${mountainName}) deleted.`);
            } else {
                console.log(`Mountain (${mountainName}) not found!`);
            }  
        }
    } else if (command === 'list') {
        var mountainList = mountains.listMountains();
        if (mountainList.length === 0) {
            console.log('No mountains found.');
        } else {
            console.log('Mountains:');
            mountainList.forEach((val) => {
                console.log(`${val.name}, ${val.elev}'.`);
            });
        }
    } else {
        console.log(`Command (${command}) not able to be processed.`);
    }
}
