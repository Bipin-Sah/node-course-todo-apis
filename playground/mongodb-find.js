const {MongoClient,ObjectID }= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{

  if(err)
  {
    return console.log("unable to connect MongoDB server.");
}
console.log('Connected to MongoDB server');

const db= client.db('TodoApp');

db.collection('Todos').aggregate([
    {$match : {completed: false}},
    $TotalAge
    {$sum : '$age'}
  ])


);
//client.close();
});
