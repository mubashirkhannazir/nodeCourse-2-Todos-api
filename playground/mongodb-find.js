const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Connection Error occured');
    }
    console.log('Connected to server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c98df3784248239188f83d7')
    // }).toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     if(err){
    //         return console.log('Unable to fetch document', err);
    //     }
    // });

    // db.collection('Todos').find().count().then((count) =>{
    //     console.log(`Todos count: ${count}`);
    // },(err) => {
    //     if(err){
    //     return console.log('Unable to fetch document', err);
    //     }
    // });

    db.collection('Users').find({name: 'Muhammad Mubashir Nazir'}).toArray().then((result) => {
        console.log(JSON.stringify(result, undefined,2));
    },(err) => {
        if(err){
            console.log('Unable to connect to the server', err);
        }
    });

    db.close();
});
