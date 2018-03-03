# Express Server
In this Section we'll look at Express.


## Setup
Create a working dir and run ```npm init```


## Install Modules
```
$ npm install logger express hbs --save
```

## Create the App 

See demo dir cotents.

### Execute in Terminal
```
$ nodemon server.js
[nodemon] 1.14.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Express Server listening on http://localhost:3000
```

### Launch in Browser
+ [http://localhost:3000](http://localhost:3000)
+ [http://localhost:3000/user](http://localhost:3000/user)
+ [http://localhost:3000/data](http://localhost:3000/data)
+ [http://localhost:3000/contact](http://localhost:3000/contact)
+ [http://localhost:3000/about.html](http://localhost:3000/about.html)

### Execute in Terminal (after stopping server)

```
$ cat server.log 

info [Sat Feb 24 2018 06:52:39 GMT-0500 (EST)]  Sat Feb 24 2018 06:52:39 GMT-0500 (EST): GET /
info [Sat Feb 24 2018 06:52:39 GMT-0500 (EST)]  Sat Feb 24 2018 06:52:39 GMT-0500 (EST): GET /favicon.ico
info [Sat Feb 24 2018 06:52:48 GMT-0500 (EST)]  Sat Feb 24 2018 06:52:48 GMT-0500 (EST): GET /user
info [Sat Feb 24 2018 06:52:54 GMT-0500 (EST)]  Sat Feb 24 2018 06:52:54 GMT-0500 (EST): GET /data
info [Sat Feb 24 2018 06:52:58 GMT-0500 (EST)]  Sat Feb 24 2018 06:52:58 GMT-0500 (EST): GET /contact
```


## Useful links
* [Express](https://expressjs.com/)
