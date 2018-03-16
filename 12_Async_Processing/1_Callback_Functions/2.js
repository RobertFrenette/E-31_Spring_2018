console.log('Entering App...');

setTimeout(() => {
    console.log('Executing First Callback funct.');
}, 3000); // 3 sec delay

setTimeout(() => {
    console.log('Executing Second Callback funct.');
}, 1000); // 1 sec delay

console.log('Done!');
