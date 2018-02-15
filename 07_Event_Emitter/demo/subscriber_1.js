// Subscribe
var register = (emitter) => {
    console.log('Subscriber_1 registering...');
    emitter.on('emit', (arg) => {
        console.log(`Subscriber_1: Name = ${arg.name}, Msg = ${arg.msg}.`);
    });    
};

module.exports = {
  register
};
