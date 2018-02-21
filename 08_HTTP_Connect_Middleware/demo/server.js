const http = require('http');
const url = require('url');

const connect = require('connect');
var session = require('express-session')
var cookies = require('connect-cookies')

const fs = require('fs');
const data = './data/data.json';

const host = '127.0.0.1';
const port = 3000;

var app = connect();

// Configure Middleware
app.use(session({"secret": "cscie_31", "resave": true, "saveUninitialized": true}));
app.use(cookies());

app.use((request, response) => {
  let clientURL  = request.url;
  let parsedURL  = url.parse(clientURL);
  let href       = parsedURL.href;

  if (href === '/') {
    let cookieViews = request.cookies.get('cookieViews') || 0;
    request.cookies.set('cookieViews', ++cookieViews);

    if (request.session.views) {
      request.session.views++;
    } else {
      request.session.views = 1;
    }
    console.log(`There have been ${request.session.views} visits for id ${request.session.id} in this Session.`);
    console.log(`This User has visited the site ${cookieViews} times.`);
  }

  response.end('Hello, Connect!\n');
});

//create node.js http server and listen on port
http.createServer(app).listen(port, host);

// http://127.0.0.1:3000
console.log(`http://${host}:${port}`);
