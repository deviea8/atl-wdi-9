var express = require('express');
var router = express.Router();
var data = require('../data.js');

router.get('/', function(req,res) {
  res.render('todos/index', {
    todos: data.seededTodos
  });
});

router.get('/new', function(req,res) {
  res.render('todos/new')
});

router.get('/:id', function(req, res) {
  var todo = data.seededTodos[req.params.id];
  res.render('todos/show', {
    todo: todo
  })
});

router.post('/', function(req, res) {
  var newTodo = {
    description: req.body.description,
    urgent: req.body.urgent
  };
  data.seededTodos.push(newTodo);
  res.redirect('/todos');
});

router.delete('/:id', function(req, res) {
  data.seededTodos.splice(req.params.id, 1);

  res.redirect('/todos');
})

router.get('/:id/edit', function(req, res){
  res.render('todos/edit', {
    todo: {
      description: data.seededTodos[req.params.id].description,
      urgent: data.seededTodos[req.params.id].urgent,
      id: req.params.id
    }
  });
});

router.put('/:id', function(req, res) {
  var todoToEdit = data.seededTodos[req.params.id];

  todoToEdit.description = req.body.description;
  todoToEdit.urgent = req.body.urgent;

  res.redirect('/todos');
});

module.exports = router;
