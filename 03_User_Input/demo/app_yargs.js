console.log('Staring App...');

// require yargs
const yargs = require('yargs');

var args = yargs.argv;
console.log(args);

// use Process
var command = process.argv[2];
console.log(`command: ${command}`);

// user yargs
var name = args.name;
console.log(`Name: ${name}`);
