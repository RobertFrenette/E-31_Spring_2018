# HTTP Connect Middelware 
In this Section we'll look at Connect Middleware.

## Setup
Create a working dir and run ```npm init```

## Install Modules
```
$ npm install connect express-session connect-cookies --save
```

## Create the App 
+ In your working dir, create ```server.js``` and ```users.js``` files

View the file(s) in the demo dir for code.

### Test 1

### Execute in Terminal
```
$ nodemon server
[nodemon] 1.14.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server`
```

#### Launch in Browser
+ Open [http://127.0.0.1:3000](http://127.0.0.1:3000) in browser
+ Enter Email Address: foobar@test.com, Password: pass
+ Click Login button

#### Console
```
$ node server
http://127.0.0.1:3000
User has visited the site 1 times.
Session jwHed9CGmwLaLFICPTlaVgYJ6vZBvZyf has 1 login attempts in this session.
{ email: 'foobar@test.com', password: 'pass' }
```

#### Browser
![Screen Shot](img/img_1.png?raw=true "Screen Shot")


### Test 2
+ Leave email and password the same
+ Click the Login button 3 more times

#### Console
```
$ node server
http://127.0.0.1:3000
User has visited the site 1 times.
Session jwHed9CGmwLaLFICPTlaVgYJ6vZBvZyf has 1 login attempts in this session.
{ email: 'foobar@test.com', password: 'pass' }
Session jwHed9CGmwLaLFICPTlaVgYJ6vZBvZyf has 2 login attempts in this session.
{ email: 'foobar@test.com', password: 'pass' }
Session jwHed9CGmwLaLFICPTlaVgYJ6vZBvZyf has 3 login attempts in this session.
{ email: 'foobar@test.com', password: 'pass' }
Session jwHed9CGmwLaLFICPTlaVgYJ6vZBvZyf has 4 login attempts in this session.
{ email: 'foobar@test.com', password: 'pass' }
User account locked for this session!
```

#### Browser
![Screen Shot](img/img_2.png?raw=true "Screen Shot")


### Test 3
+ Stop Node Server
+ Close browser
+ Restart Server
+ Open [http://127.0.0.1:3000](http://127.0.0.1:3000) in browser
+ Enter Email Address: foobar@test.com, Password: pass
+ Click Login button

#### Console
```
$ node server
http://127.0.0.1:3000
User has visited the site 1 times.
Session 8tCeLVMF-HRy_Ef--KbqmHAv-6yATuQe has 1 login attempts in this session.
{ email: 'foobar@test.com', password: 'pass' }
```

+ Change Password to: password
+ Click Login button

#### Console
```
$ node server
http://127.0.0.1:3000
User has visited the site 1 times.
Session 8tCeLVMF-HRy_Ef--KbqmHAv-6yATuQe has 1 login attempts in this session.
{ email: 'foobar@test.com', password: 'pass' }
Session 8tCeLVMF-HRy_Ef--KbqmHAv-6yATuQe has 2 login attempts in this session.
{ email: 'foobar@test.com', password: 'password' }
```

#### Browser
![Screen Shot](img/img_3.png?raw=true "Screen Shot")

+ Click Log out button
