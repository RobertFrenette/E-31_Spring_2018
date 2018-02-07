# HTTP Server
In this Section we'll create a Node HTTP Server.

## Setup
Create a working dir and run ```npm init```


## Install Nodemon
```
$ npm install -g nodemon
```

Note the -g attribute saves this module in your Global npm modules, so it is accessible anywhere.

nodemon watches for changes to your code, then restarts your App.


## Create the App 

In your working dir, create the following files
+ server.js

View the files in the demo dir for code.

### Execute in Terminal
```
$ nodemon server
[nodemon] 1.14.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server`
```

### Launch in Browser (or makes GET request  in Postman)
[http://127.0.0.1:3000](http://127.0.0.1:3000)


## Create new App 

In your working dir, create the following files
+ server_2.js
+ index.html

View the files in the demo dir for code.

### Execute in Terminal
```
$ nodemon server_2
[nodemon] 1.14.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server_2`
Node server listening at http://127.0.0.1:3000.
To load the App, enter the following in your Browser:
http://127.0.0.1:3000
```

### Launch in Browser (or makes GET request  in Postman)
[http://127.0.0.1:3000](http://127.0.0.1:3000)


## Create new App 

In your working dir:
+ Create a file named server_3.js
+ Create a data dir 
+ Create a file named data.json in the data dir

View the files in the demo dir for code.

### Execute in Terminal
```
$ nodemon server_3
[nodemon] 1.14.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server_3`
Node server listening at http://127.0.0.1:3000.
To load the App, enter the following in your Browser:
http://127.0.0.1:3000
```

### Launch in Browser (or makes GET request  in Postman)
[http://127.0.0.1:3000](http://127.0.0.1:3000)


## Useful links
* [nodemon](https://nodemon.io/)
* [Postman](https://www.getpostman.com/)
