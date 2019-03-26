//const MongoClient = require('mongodb').MongoClient;//this is equivalent to the line below
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Connection Error occured');
    }
    console.log('Connected to server');



    db.collection('Todos').insertOne({
        text: 'some text',
        completed: false,
        notcompleted: true

    }, (err, results) => {
        if(err){
            return console.log('Unable to Insert into', err);
        }
        console.log(JSON.stringify(results.ops, undefined, 2))
    });
    db.close();
});
// db.collection('Users').insertOne({
//     name: 'Muhammad Mubashir Nazir',
//     age: 23,
//     location: 'CIE-NUST, NUST H 12, Islamabad.'
// }, (err, results) => {
//     if(err){
//         return console.log('Unable to Insert into', err);
//     }
//     console.log(JSON.stringify(results.ops[0]._id.getTimestamp(), undefined, 2))
// });
//  db.close();
// });
