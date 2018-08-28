var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text:{
    type : String
  },
  completed: {
    type: Boolean
  },
  completedAt:{
    type: Number
  }
});

// var newTodo = new Todo({
//   text:'Cook dinner',
//   completed: false
// });
//
// newTodo.save().then((doc) =>{
//   console.log(JSON.stringfy(doc, undefined,2));
// }, (e) =>{
//   console.log('Unable to save todo')
// });

var otherTodo = new Todo({
  text: 'feed the cat',
  completed: true,
  completedAt: 678
});

otherTodo.save().then((doc) =>{
  console.log(doc);
},(err) =>{
  console.log('Unable to save todo');
});
