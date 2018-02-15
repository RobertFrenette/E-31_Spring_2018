// nodemon server
// simple HTTP Server which returns "Hello, Node!"" in the response

// require Node modules
const http = require('http');

const host = '127.0.0.1';
const port = 3000;

http.createServer(function(request, response){
  response.writeHead(200, {'Content-type':'text/plain'});
  response.write('Hello, Node!');
  response.end( );
}).listen(port, host);

console.log(`Node server listening at http://${host}:${port}.`);
console.log('To load the App, enter the following in your Browser:');
console.log(`http://${host}:${port}`);
