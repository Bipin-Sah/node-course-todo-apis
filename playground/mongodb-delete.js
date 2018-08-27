const {MongoClient, ObjectID} = require('mongodb');
const url= "mongodb://localhost:27017/'Users'";

MongoClient.connect(url, (err, client)=>{
    if(err){
        return console.log('unable to connect');
    }
    console.log('Connected to Mongodb');
    const db = client.db('Users');

    //deleteMany
    // db.collection('user').deleteMany({completed: true}). then((result)=>{
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('user').deleteOne({completed: false}).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('user').findOneAndDelete({completed: false}).then((result)=>{
        console.log(result);
    });

    client.close();
})