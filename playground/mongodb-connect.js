const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp')

  db.collection('Todos').insertOne({
    text: 'Something New',
    completed: false,
    name: 'SRS'
  },(err, result) => {
    if(err){
      return console.log('unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  }
/*
const db = client.db('Users')
db.collection('Users').insertOne({
  name:'BIPIN KUMAR SAH',
  age: 30,
  location:'BTM Layout 2nd Stage'
},(err,result) => {
  if(err){
    return console.log('unable to insert users',err);
  }
  console.log(JSON.stringify(result.ops, undefined, 2));
}*/
);
  client.close();
});
