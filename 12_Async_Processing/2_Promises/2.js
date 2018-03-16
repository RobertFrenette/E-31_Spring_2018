// Promise with input
console.log('Entering App...');

// getUserById() is a function which takes an id
var getUserById = (id) => {
	// Array of User Object Literals
	var users = [
	 		{
			 id: 1,
			 userName: 'FooBar'
			 },
			 { 
			 id: 2,
			 userName: 'BizBaz'
			 }, 
			 {
			 id: 3,
			 userName: 'BingBang'
			 }
	];
     
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof id  === 'number') {
                var user = users.filter((user) => user.id === id);
                if (user.length === 0) {
                    reject('User not found.');
                } else {
                    resolve(JSON.stringify(user));
                }
            } else {
                reject('Invaild ID passed!');
            }
        }, 1000);
    });
};

// Resolve test
getUserById(3).then((user) => {
    console.log(`User: ${user}`);
}, (err) => { // Error Handler
    console.log(err);
});

// Reject test - invalid ID passed
getUserById('a').then((user) => {
    console.log(`User: ${user}`);
}, (err) => { // Error Handler
    console.log(err);
});

// Reject test using catch() Promise Method - User not found
getUserById(4).then((user) => {
    console.log(`User: ${user}`);
}).catch((err) => { // catch() method
    console.log(err);
});

console.log('Done!');
