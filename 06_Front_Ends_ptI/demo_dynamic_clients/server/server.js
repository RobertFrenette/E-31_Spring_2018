// node server
// simple HTTP Server which reads data from a JSON file and returns in the response

var http = require('http');
var fs = require('fs');
var path = require('path');

const data = './data/data.json';

const host = '127.0.0.1';
const port = 3000;

// http://127.0.0.1:3000
http.createServer((request, response) => {
    // If you get a CORS error, add the following line:
    response.setHeader('Access-Control-Allow-Origin', '*');

    // set Content-Type for JSON
    response.setHeader('Content-Type', 'application/json');
    response.end(fs.readFileSync(data));
}).listen(port, host);

console.log(`http://${host}:${port}`);
