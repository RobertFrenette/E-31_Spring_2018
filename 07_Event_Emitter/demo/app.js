// require Modules
const EventEmitter = require('events').EventEmitter;

const subscriber_1 = require('./subscriber_1');
const subscriber_2 = require('./subscriber_2');

// Instantiate new EventEmitter
var emitter = new EventEmitter();

// Subscribe
console.log('Parent registering...');
emitter.on('emit', (arg) => {
    console.log(`Parent: Name = ${arg.name}, Msg = ${arg.msg}.`);
});    

// Register Subscriber_1
subscriber_1.register(emitter);

// Emit
emitter.emit('emit', {name: "FooBar", msg: "This is the first message"});
console.log('');

// Register Subscriber_2
subscriber_2.register(emitter);

// Emit
emitter.emit('emit', {name: "BizBaz", msg: "This is the second message"});
console.log('');
