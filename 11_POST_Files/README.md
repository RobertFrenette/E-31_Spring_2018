# POSTing Data / Files
In this Section we'll look at uploading data/files to the server via a POST request.


## Generate the App (express-generator)
```
$ express --view=hbs demo
$ cd demo
$ npm install
$ npm install --save log-util express-session connect-cookies multer connect-flash
```
## Create the App 

See demo dir cotents.

### Execute in Terminal
```
$ npm start
> demo@0.0.0 start /demo
> node ./bin/www
```

### Launch App
Load [http://localhost:3000/](http://localhost:3000/) in your browser


![Screen Shot](img/img1.png?raw=true "Screen Shot")


## Useful link(s)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [multer](https://www.npmjs.com/package/multer)
* [connect-flash](https://github.com/jaredhanson/connect-flash)

