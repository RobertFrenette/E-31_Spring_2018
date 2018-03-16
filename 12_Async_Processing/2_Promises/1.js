// Basic Promises

console.log('Entering App...');

// create new Promise Object
// resolve() function -> promise fulfilled
var myFirstPromise = new Promise((resolve, reject) => {
    // async processing to be executed
    setTimeout(() => {
        resolve('Promise resolved.');
    }, 2000);
});

// create new Promise Object
// reject() function -> promise rejected
var mySecondPromise = new Promise((resolve, reject) => {
    // async processing to be executed
    setTimeout(() => {
        reject('Promise rejected!');
    }, 2000);
});

// invoke promise for Revolve
// then() called when Promise is fulfilled
myFirstPromise.then((msg) => {
    console.log(msg);
});

// invoke promise for Reject
// (err) called when Promise is rejected
mySecondPromise.then((msg) => {
    // won't be hit in this example because Promise is Rejected
}, (err) => { // Error Handler
    console.log(err);
});

console.log('Done!');