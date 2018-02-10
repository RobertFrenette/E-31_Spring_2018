// node server

/*
 * This script launches an http server on port 3000.
 * Test:
 * Get data for all Mountains: 
 *  http://127.0.0.1:3000?action=mountains&dataURL=/
 * Get details for specific Mountain: 
 *  http://127.0.0.1:3000?action=mountain&dataURL=/hiking-mount-washington
 */

var http = require('http');
var url  = require('url');
var HOST = '127.0.0.1';
var PORT = 3000;

/**
 * This function spawns a python3 child process to scrape a web page,
 * then returns the data as a JSONP payload.
 * The function listens for python to write the response to stdout.
 *
 * callBack:    callback function to send response back to
 * action:      identifies the type of web page scrape to be performed (python)
 * dataURL:     url to retrieve data from (AMC)
 */
function getData(callBack, action, dataURL) {
    var spawn = require('child_process').spawn,
        child = spawn('python3',['py/scrape.py', action, dataURL]);
    var resp = '';

    child.stdout.on('data', function(data) {
        resp += data.toString();
    });

    child.on('close', function() {
        respData = resp;
        callBack(resp);
    });
}

/**
 * This function creates an anonymous function which listens for requests
 * on port 3000 on the local host.
 *
 * When a request is received, it calls the getData() function to retreive
 * data from the python script(s) which scrape the appropraite web page(s) for data,
 * then returns the data as a JSONP payload.
 */
http.createServer((request, response) => {
    if (request.url !== '/favicon.ico') {
        console.log(request.url);
    }
    
    var parts = url.parse(request.url, true).query;
    var action = parts.action;
    var dataURL = parts.dataURL;
        
    getData((data) => {
    	response.writeHead(200, {
    		    'Content-Type':
    		    'application/json',
                'Access-Control-Allow-Origin' : '*' });
    	response.write(JSON.stringify(data));
    	response.end();
    }, action, dataURL);
}).listen(PORT, HOST);
console.log('Node server listening at http://' + HOST + ':' + PORT);
