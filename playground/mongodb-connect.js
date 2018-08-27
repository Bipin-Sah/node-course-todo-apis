// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/Users',(err, client) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('Users')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // },(err, result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  db.collection('user').insertOne({
    name : 'Bipin1',
    Age: 31,
    Location: 'BTM layout stage1'
  },(err, result)=>{
    if(err){
      return console.log('Unable to insert user', err);
    }
    console.log(JSON.stringify(result.ops, undefined));
  });
  client.close();
});
