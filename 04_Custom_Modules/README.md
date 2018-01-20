# Custom Modules
In this Section we'll learn how to create, and require, custom modules.


## Setup

### Execute in Terminal
```
$ mkdir demo
$ cd demo
$ npm init
...
Is this ok? (yes) yes
```


## Install Modules

### Execute in Terminal
```
$ npm install logger --save
$ npm install yargs --save
```


## Create the App

In your working dir, create the following files
+ app.js
+ mountains.js

View the files in the demo dir for code.

### Execute in Terminal
```
$ node app.js --name="Mt. Washington" --elev="6,288"

$ node app.js insert  --elev="6,288"

$ node app.js delete --name="Mt. Washington" --elev="6,288"

$ node app.js insert --name="Mt. Washington" --elev="6,288"
Mountain Created: Mt. Washington 6,288!

$ node app.js insert --name="Mt. Washington" --elev="6,288"
Mountain not created: Duplicate mountain (Mt. Washington) found!

$ cat mountains.json 
[{"name":"Mt. Washington","elev":"6,288"}]

$ cat log.txt 
info [Sat Dec 23 2017 11:44:32 GMT-0500 (EST)]  App accessed by rob: Failure - Command not found.
info [Sat Dec 23 2017 11:44:57 GMT-0500 (EST)]  App accessed by rob: Failure - Missing Mountain Data param(s).
info [Sat Dec 23 2017 11:45:04 GMT-0500 (EST)]  App accessed by rob: Failure - Command (delete) not able to be processed.
info [Sat Dec 23 2017 11:45:10 GMT-0500 (EST)]  App accessed by rob: Success - Mt. Washington, 6,288.
info [Sat Dec 23 2017 11:45:12 GMT-0500 (EST)]  App accessed by rob: Failure - Mountain not created: Duplicate mountain (Mt. Washington) found.

$ node app.js insert --name="Mt. Adams" --elev="5,799"
Mountain Created: Mt. Adams 5,799!

$ cat mountains.json 
[{"name":"Mt. Washington","elev":"6,288"},{"name":"Mt. Adams","elev":"5,799"}]
```

