# Node and MySQL
Although this is a MEAN Stack course, I realize not everyone works in a development shop that supports the use of Mongo.
As a result, I'm providing this demo on connecting to a MySQL DB from Node.

IMPORTANT: This is an "advanced topic" which is not officially part of the course! I'm presenting it as an example for those familair with MySQL.

Note that this Demo assumes you have a local MySQL installation and that you know how to create a new DB User. MySQL setup / config is out-of-scope for this Demo.

This example assumes a MySQL User with the following
+ username: e31
+ password: password
+ creds: DBA


## Setup
+ Create MySQL DB User as defined above (or edit inc/config.json to match your user creds)
+ Execute sql/sql.sql in MySQL to build and populate the DB with test data

![MySQL Workbench](img/mysql_workbench.png?raw=true "MySQL Workbench")

+ Create a working dir and run ```npm init```
+ See code in demo


## Install Modules
```
$ npm install express body-parser mysql promise-mysql --save
```

### Launch App
+ Ensure MySQL is started
+ Start server.js
```
$ node server
```


### Test in Postman (POST)
+ Set Headers Content-Type = application/x-www-form-urlencoded
+ Set Body as follows

![Postman](img/postman.png?raw=true "Postman")

+ Click Send

![Postman](img/results.png?raw=true "Postman")


## Useful links
* [mysql npm](https://www.npmjs.com/package/mysql)
* [promise-mysql npm](https://www.npmjs.com/package/promise-mysql)
* [postman](https://www.getpostman.com)
