// node server
var http = require('http');
var url = require('url');

var userEmitter = require('./user_emitter');
var userDetector = require('./user_detector');

const host = '127.0.0.1';
const port = 3000;

// http://127.0.0.1:3000
// http://127.0.0.1:3000/username
// http://127.0.0.1:3000/username?name=FooBar
http.createServer((request, response) => {
    // get path
    const { pathname } = url.parse(request.url);
    // get QueryString
    const query = url.parse(request.url,true).query;

    userEmitter.checkUserName(pathname, query);

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Content-Type', 'application/json');
    response.end('Hello, Node!');
}).listen(port, host);

console.log(`Server running on http://${host}:${port}`);
