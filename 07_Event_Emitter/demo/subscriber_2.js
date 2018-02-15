// Subscribe
var register = (emitter) => {
    console.log('Subscriber_2 registering...');
    emitter.on('emit', (arg) => {
        console.log(`Subscriber_2: Name = ${arg.name}, Msg = ${arg.msg}.`);
    });    
};

module.exports = {
  register
};
