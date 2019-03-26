const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Connection Error occured');
    }
    console.log('Connected to server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'go for running'}).then((results) => {
    //     console.log(results);
    // });

    //deletOne
    // db.collection('Todos').deleteOne({text: 'hello brother'}).then((results) => {
    //     console.log(results);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'hello brother'}).then((results) => {
    //     console.log(results);
    // });

    db.collection('Users').findOneAndDelete({ _id: ObjectID("5c9a2005ef19801282bfff72") }).then((results) => {
        console.log(results);
    });

    db.close();
});
