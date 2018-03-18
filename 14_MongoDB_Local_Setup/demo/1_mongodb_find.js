const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/MountainsApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to DB.');
    }
    console.log('Connected to DB.');
    
    const db = client.db('MountainsApp');
    // use Promise: .then()
    db.collection('Mountains').find().toArray().then((docs) => {
            console.log('Mountains:');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
                console.log('Unable to fetch data.', err);
        });
        
    db.collection('Mountains').find({mountainName: 'Mt. Washington'}).toArray().then((docs) => {
            console.log('Mountains:');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
                console.log('Unable to fetch data.', err);
        });
    
    // Copy _id from DB
    db.collection('Mountains').find({
                _id: new ObjectID('5a428e7bae5cdb08315d2ba5')
            }).toArray().then((docs) => {
            console.log('Mountains:');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
                console.log('Unable to fetch data.', err);
        });
    
    db.collection('Mountains').find().count().then((count) => {
            console.log(`Mountains count: ${count}.`);
        }, (err) => {
                console.log('Unable to fetch data.', err);
        });
        
    client.close();
});
