// https://nodejs.org/api/timers.html#timers_settimeout_callback_delay_args
// https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original
const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);


console.log('Starting App...');


function calculateCount() {
	let count = 0;
	for (let indx = 0; indx < 1000; indx++) {
		count++;
	}
	return count;
}
// sync call
console.log(`Calculating Count first time: count = ${calculateCount()}`);


// async call - using CallBack funct
// https://nodejs.org/api/timers.html#timers_settimeout_callback_delay_args
setTimeout(() => {
	console.log(`Calculating Count second time: count = ${calculateCount()}`);
}, 2000); // delay in  milliseconds (2000 = approx 2 sec)


// promisify setTimeout - .then()
setTimeoutPromise(2000, 'FooBar').then((value) => {
	console.log(value);
});


console.log('Done.');
