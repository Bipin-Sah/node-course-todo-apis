const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};


// const TodoSchema = mongoose.Schema({
//     text:{
//         type: String,
//         required: true,
//         minlength : 1,
//         trim: true
//     },
//     completed:{
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default : 0
//     }
// })


 //var Todo = mongoose.model('Todo',TodoSchema);

// module.exports =  mongoose.model('Todo',TodoSchema);

//var mongoose = require('mongoose');
