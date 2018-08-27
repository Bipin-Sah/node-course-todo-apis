const {MongoClient, ObjectID} = require('mongodb');
const url= "mongodb://localhost:27017/'Users'";

MongoClient.connect(url, (err, client)=>{
    if(err){
        console.log('Unable to connect MongoDb');
    }
    console.log('Connect to mongoDB');

    const db = client.db('Users');

    //Update document
//     db.collection('user').findOneAndUpdate({
//         _id: new ObjectID('5b83c6f3312efc09e01deea8')
//     },{
//         $set: {name: "Tiffin"}
//     },{
//     returnOriginal: false
// }).then((result)=>{
//     console.log(result);
// });

//Increment by some number
db.collection('user').findOneAndUpdate({
    _id: new ObjectID('5b83c6f3312efc09e01deea8')
},{
    $set: {
        name: 'Bipin'
    },
        $inc: {
            Age: 1
        }},{
        returnOriginal: false
    }).then((result) =>{
    console.log(result);
});


    client.close();
});