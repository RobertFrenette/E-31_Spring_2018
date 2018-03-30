require('dotenv').config();
 
var express    = require('express');
var hbs        = require('hbs');
var path       = require('path');
var mongoose   = require('mongoose');
var bodyparser = require('body-parser');
var log        = require('log-util');

var mountains  = require('./routes/mountains.js');
var api  = require('./routes/api.js');
 
// Connect to DB
var uri = `mongodb://${process.env.DB_USER}:${process.env.DB_USER_PWD}@cluster0-shard-00-00-rvadh.mongodb.net:27017,cluster0-shard-00-01-rvadh.mongodb.net:27017,cluster0-shard-00-02-rvadh.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`;
mongoose.connect(uri)
        .then(() => { log.info('DB connection successful!'); })
        .catch((err) => { log.error(`DB connection failed: ${err}`); });
 
var app = express();

hbs.registerPartials(__dirname + '/views/partials'); 

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use('/mountains', mountains);
app.use('/api', api);
 
app.use(express.static(path.join(__dirname, 'public')));
 
app.use((req, res, next) => {
    log.error(`404: ${req.url}`);
    res.status(404).end('Error: 404 - Page Not Found.');
});
 
app.use((req, res, next) => {
    log.error(`500: ${req.url}`);
    res.status(500).end('Error!');
});

module.exports = app;
