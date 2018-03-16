console.log('Entering App...');

/*
 * use setTimeout() method to demonstrate Async execution 
 * setTimeout() takes two args:
 * 1. CallBack funct (ES6 Arrow funct in this example)
 * 2. delay (milliseconds) before CallBack funct is executed
 */

setTimeout(() => {
    console.log('Executing Callback funct.');
}, 3000); // 3 sec delay

console.log('Done!');