//const MongoClient = require('mongodb').MongoClient;
// ES6 Object Destructuring - make new vars from an Object's properties
const {MongoClient, ObjectID} = require('mongodb');

// connect to Mongo server
MongoClient.connect('mongodb://localhost:27017/MountainsApp', (err, client) => {
    if (err) {
        // note, if an error, we exit (return) here
        return console.log('Unable to connect to DB.');
    }
    console.log('Connected to DB.');
    
    // connect to DB
    const db = client.db('MountainsApp');
    db.collection('Mountains').insertOne({
                    mountainName: 'Mt. Washington',
                    mountainElevation: '6,288'
                }, (err, result) => {
                    if (err) {
                        return console.log('Unable to insert into DB.');
                    }
                    console.log(JSON.stringify(result.ops, undefined, 2));
                });
    client.close();
});
