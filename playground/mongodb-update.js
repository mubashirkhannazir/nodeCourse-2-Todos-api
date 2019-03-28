const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Connection Error occured');
    }
    console.log('Connected to server');

    // db.collection('Todos').findOneAndUpdate( {
    //     _id: new ObjectID("5c98df3784248239188f83d7")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     $returnOriginal: false
    // } ).then((results) => {
    //     console.log(results);
    // });

    db.collection('Users').findOneAndUpdate( {
        _id: new ObjectID("5c98e8af8aad252a68e1a21a")
    }, {
        $set: {
            name: 'Mark James'
        },
        $inc: {
            age: 2
        }
        }, {
        $returnOriginal: false
    } ).then((results) => {
        console.log(results);
    });

    db.close();
});
