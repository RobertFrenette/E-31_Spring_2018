const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const connect = require('connect');
const session = require('express-session');
const cookies = require('connect-cookies');

const users = require('./users');

const host = '127.0.0.1';
const port = 3000;

var app = connect();

// Middleware
app.use(session({ "secret": "cscie_31", "resave": true, "saveUninitialized": true }));
app.use(cookies());

app.use((request, response) => {
  // If you get a CORS error, add the following line:
  response.setHeader('Access-Control-Allow-Origin', '*');

  if (request.method === 'GET') {
    let { pathname } = url.parse(request.url);
    if (pathname === '/') {
      let views = request.cookies.get('views') || 0;
      request.cookies.set('views', ++views);
      console.log(`User has visited the site ${views} times.`);
    }

    var filePath = '.' + request.url;
    if (filePath == './') {
      filePath = './client/index.html';
    } else {
      filePath = path.join(__dirname, 'client/', request.url);
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var contentType = 'text/html';
    var mimeTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.json': 'application/json',
      '.png': 'image/png'
    };

    contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
      if (error) {
        if (error.code == 'ENOENT') {
          // if request for dir, change contentType to html to serve 404
          if (contentType === 'application/octet-stream') {
            contentType = 'text/html';
          }
          response.writeHead(404, { 'Content-Type': contentType });
          response.end(content, 'utf-8');
        } else {
          response.writeHead(500, { 'Content-Type': contentType });
          response.end(content, 'utf-8');
        }
      } else {
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(content, 'utf-8');
      }
    });
  } else if (request.method === 'POST') {
    let parsedData = {};

    if (request.session.login_attempts) {
      request.session.login_attempts++;
    } else {
      request.session.login_attempts = 1;
    }
    console.log(`Session ${request.session.id} has ${request.session.login_attempts} login attempts in this session.`);

    request.on('data', (data) => {
      parsedData = JSON.parse(data);
      console.log(parsedData);
    }).on('end', () => {
      if (request.session.login_attempts > 3) {
        console.log('User account locked for this session!');
        response.statusCode = 401; // Unauthorized
        response.end();
      } else if (users.user.authorize(parsedData.email, parsedData.password)) {
        // reset attempts in the event of logout in this session
        request.session.login_attempts = 0;

        response.statusCode = 200;
        response.end();
      } else { // bad creds
        response.statusCode = 403; // Forbidden
        response.end();
      }
    }).on('error', (err) => {
      response.statusCode = 500; // Internal Server Error
      response.end();
    });
  } else { // Not GET or POST
    response.statusCode = 404; // Not found
    response.end();
  }
});

//create node.js http server and listen on port
http.createServer(app).listen(port, host);

// http://127.0.0.1:3000
console.log(`http://${host}:${port}`);
