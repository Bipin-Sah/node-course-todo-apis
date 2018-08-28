var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/TodoApp';
mongoose.connect(url);

var Todo = mongoose.model('Todo',{
  text: {
    type: String
  },
  completed:{
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// var newTodo = new Todo({
//   text: 'Cook dinner',
// });
//
// newTodo.save().then((doc)=> {
//   console.log('Saved todo', doc);
// }, (err)=>{
//   console.log('unable to save todo');
// });

var otherTodo = new Todo({
  text: 'feed the cat',
  completed: true,
  completedAt: 345
});

otherTodo.save().then((doc)=>{
  console.log(JSON.stringify(doc, undefined, 2));
}, (e)=>{
  console.log('unbale to save OtherTodo');
});
