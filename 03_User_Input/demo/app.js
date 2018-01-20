console.log('Staring App...');

// Use Node Process Object
var args = process.argv;
console.log(args);

var command = args[2];
console.log(`command: ${command}`);

var name = args[3];
console.log(`Name: ${name}`);