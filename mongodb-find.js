const {MongoClient,ObjectID }= require('mongodb');
//DB Name : TodoApp / Users
const url = 'mongodb://localhost:27017/Users';

MongoClient.connect(url, (err, client)=>{

  if(err)
  {
    return console.log("unable to connect MongoDB server.");
}
console.log('Connected to MongoDB server');

const db = client.db('Users');

// db.collection('user').aggregate([
//   {$match: {"_id": new ObjectID("5b8399672e9df10af0327bec")}},
//   {$group: {
//     _id: null,
//     TotalAge:  {$sum: "$Age"}
//   }}
// ]).toArray().then((docs) =>{
//   console.log('Users');
//   console.log(JSON.stringify(docs));
// },(err) => {
//   console.log("Unable to fetch Users: " +err);
// });

db.collection('user').find({"name": "Bipin1"}).toArray().then((docs) => {
  console.log('Users');
  console.log(JSON.stringify(docs));
}, (err) => {
  console.log('Unable to fetch todos', err);
});

client.close();
});
