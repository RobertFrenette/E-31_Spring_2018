console.log('Entering App...');

// getUserById() is a function which takes an id and a callback funct
var getUserById = (id, callback) => {
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
	 // execute CallBack funct, returning the User Object 
	 // which matches the id passed to getUserById()
	 callback(users.filter((user) => user.id === id));
};

var getUserByUserName= (userName, callback) => {
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
	
	// simulate Async execution delay
	setTimeout(() => {
		callback(users.filter((user) => user.userName === userName));
	}, 1000);
};

// Call getUserById() passing the id of the User to return, 
// and the CallBack funct to be executed
getUserById(3, (user) => {
	console.log('Getting User by Id 3...');
	console.log(user);
});

// Call getUserByUserName() passing the userName of the User to return, 
// and the CallBack funct to be executed
getUserByUserName('BingBang', (user) => {
	console.log('Getting User by UserName BingBang');
	console.log(user);
});

console.log('Done!');
