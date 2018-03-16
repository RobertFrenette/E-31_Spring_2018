const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/MountainsApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to DB.');
    }
    console.log('Connected to DB.');
    
    const db = client.db('MountainsApp');

    // Copy _id from DB
    db.collection('Mountains').findOneAndUpdate({
                                               _id: new ObjectID('5a428e7bae5cdb08315d2ba5')
                                             },
                                             {
                                                $set: {mountainElevation: '0,000'}
                                             },
                                            {
                                                returnOriginal: false
                                            }).then((result) => {
                                                console.log(result);
                                            });    
    client.close();
});
