## Setup
Create a working dir and run ```npm init```


## Install Modules
```
$ npm install express hbs body-parser --save
```

### Launch App
```
$ node server.js
```


### Test in Browser (404 error route)
+ [http://localhost:3000](http://localhost:3000)
+ Should display Error: 404!


### Test in Browser (login route)
+ [http://localhost:3000/login](http://localhost:3000/login)in browser
+ Login (Fail)
    + Email Address = foobar@test.com
    + Password = pass

![Screen Shot](img/img_1.png?raw=true "Screen Shot")

+ Login (Success)
    + Email Address = foobar@test.com
    + Password = password

![Screen Shot](img/img_2.png?raw=true "Screen Shot")

## Useful link(s)
* [hbs](https://www.npmjs.com/package/hbs)
* [body-parser](https://www.npmjs.com/package/body-parser)
 