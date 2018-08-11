const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{

  if(err)
  {
    return console.log("unable to connect MongoDB server.");
}
console.log('Connected to MongoDB server');

const db= client.db('TodoApp');

db.collection('Todos').find().count().then((count) =>{
  console.log('Todos count: ${count}');
//  console.log(JSON.stringify(docs,undefined, 2));
}, (err) => {
  console.log('Unable to fetch todos',err);
}

);
client.close();
});
