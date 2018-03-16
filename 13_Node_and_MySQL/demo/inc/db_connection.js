var mysql = require("promise-mysql");
var config = require('./config.json');

module.exports = {
    getDbConnection: function(callback, req, res) {
        mysql.createConnection({
            connectionLimit: config.connectionLimit,
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.db,
            debug: config.debug
        }).then(function(conn){
            callback(conn, req, res);
        }).catch(function(error){
            console.log('Error establishing DB connection!');
            console.log(error);
            res.json({'success' : false});
        });
    },
    closeDbConnection: function(con) {
        console.log('DB Connection closed!');
        con.end();
    }
};
