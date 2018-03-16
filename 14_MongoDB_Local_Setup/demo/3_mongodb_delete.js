const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/MountainsApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to DB.');
    }
    console.log('Connected to DB.');
    
    const db = client.db('MountainsApp');

    // Copy _id from DB
    db.collection('Mountains').findOneAndDelete({
                _id: new ObjectID('5a428e7bae5cdb08315d2ba5')
            }).then((result) => {
            console.log(result);
        }, (err) => {
                console.log('Unable to delete mountain.', err);
        });    
    client.close();
});
