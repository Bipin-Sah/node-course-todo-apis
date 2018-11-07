const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user')

var app= express();

app.use(bodyParser.json());

const port = app.eventNames.PORT || 3000;

app.post('/todo',(req,res)=>{
  var todo = new Todo({
    text : req.body.text,
    completed: req.body.completed,
    completedAt: req.body.completedAt
  })
  todo.save().then((doc)=>{
    res.status(200).send(doc)
  },(e)=>{
    res.status(400).send(e)
  });

});


app.post('/useras', (req, res)=>{
  var use = new User({
    email: req.body.email
  });
  use.save().then((result)=>{
    res.status(200).send(result)
  },(e)=>{
    res.status(400).send(e)
  })
});

app.get('/todos',(req,res)=>{
  Todo.find().then((result)=>{
    res.status(200).send(result);
  },(e)=>{
    res.status(400).send();
  });
});

app.delete('/todos/:id',(req,res)=>{
  var id = req.params.id
  if(!ObjectID.isValid(id)){
    return res.status(404).send()
  }
  Todo.findByIdAndDelete(id).then((result)=>{
    if(!result){
      return res.status(400).send();
    }
    res.status(200).send(result)
  }).catch((e) =>console.log(e))
});

app.patch('/todos/:id',(req,res)=>{
  var id = req.params.id;
  var body = _.pick(req.body,['text', 'completed']);

  if(!ObjectID.isValid(id)){
    res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  }else {
    completed = false;
    completedAt = null;
  }

  Todo.findByIdAndUpdate(id,{$set: body}, {new : true}).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) =>{
    res.status(400).send();
  });
});

app.post('/users', (req,res)=>{
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then(()=>{
        return user.generateAuthToken();
    }).then((token)=>{
        res.header('X-auth', token).send(user);
    }).catch((e) => {
      res.status(400).send(e);
    });
});


app.listen(port,()=>{
  console.log(`Started server on port ${port}`)
});



// var otherTodo = new Todo({
//   text: 'feed the cat',
//   completed: true,
//   completedAt: 345
// });

// otherTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e)=>{
//   console.log('unbale to save OtherTodo');
// });

module.exports = {app};
