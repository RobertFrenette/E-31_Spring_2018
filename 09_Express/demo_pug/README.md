## Setup
Create a working dir and run ```npm init```


## Install Modules
```
$ npm install express pug --save
```

### Launch App
```
$ node ./bin/www
```

### Test in Browser (404 error route)
+ [http://localhost:3000/test](http://localhost:3000/test)

![Screen Shot](img/1.png?raw=true "Screen Shot")


### Test in Browser (Param and QueryString)
+ [http://localhost:3000/users/secret/mysecretkey?mysecretvalue=123](http://localhost:3000/users/secret/mysecretkey?mysecretvalue=123)in browser

![Screen Shot](img/img.png?raw=true "Screen Shot")


### Test in Browser (Login)
+ [http://localhost:3000](http://localhost:3000)in browser
+ Click the [Login](http://localhost:3000/login) button or menu item
+ Login (Note: There is no auth on creds in this demo)
    + UserName = FooBar
    + Password = password

![Screen Shot](img/2.png?raw=true "Screen Shot")


### Dashboard

![Screen Shot](img/3.png?raw=true "Screen Shot")



## Useful link(s)
* [jade](http://jade-lang.com/api)
* [pug](https://pugjs.org/api/getting-started.html)
 