# URL Decoding
This demo shows how to decode a URL.

## Create the App 
+ ```mkdir demo_decode_url```
+ ```cd demo_decode_url```
+ ```npm init```

In your working dir:
+ Create a file named server.js
+ Create a data dir 
+ Create a file named data.json in the data dir

View the files in the demo_decode_url dir for code.

### Execute in Terminal
```
$ nodemon server
[nodemon] 1.14.11
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Node server listening at http://127.0.0.1:3000.
```

## Test the App

### Launch in Browser (or makes GET request  in Postman)
[http://127.0.0.1:3000](http://127.0.0.1:3000)

```
Decoding:
clientURL: / 

Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/',
  path: '/',
  href: '/' }

href: /

path: /

path_name: /

qry: null

Destructuring:
pathname: /

query: null
```

### Launch in Browser (or makes GET request  in Postman)
[http://localhost:3000/data](http://localhost:3000/data)

```
Decoding:
clientURL: /data 

Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/data',
  path: '/data',
  href: '/data' }

href: /data

path: /data

path_name: /data

qry: null

Destructuring:
pathname: /data

query: null
```

### Launch in Browser (or makes GET request  in Postman)
[http://localhost:3000/login.html](http://localhost:3000/login.html)

```
Decoding:
clientURL: /login.html 

Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/login.html',
  path: '/login.html',
  href: '/login.html' }

href: /login.html

path: /login.html

path_name: /login.html

qry: null

Destructuring:
pathname: /login.html

query: null
```

### Launch in Browser (or makes GET request  in Postman)
[http://localhost:3000/login.html?username=FooBar](http://localhost:3000/login.html?username=FooBar)

```
Decoding:
clientURL: /login.html?username=FooBar 

Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?username=FooBar',
  query: 'username=FooBar',
  pathname: '/login.html',
  path: '/login.html?username=FooBar',
  href: '/login.html?username=FooBar' }

href: /login.html?username=FooBar

path: /login.html?username=FooBar

path_name: /login.html

qry: username=FooBar

Destructuring:
pathname: /login.html

query: username=FooBar
```
