//packages
var express = require('express');
var router = express.Router();
var todontsList = require('../data.js');

//routes
router.get('/', function(req, res) {
  res.render('index', {
    todonts: todontsList
  });
});

router.get('/new', function(req, res) {
  res.render('new');
});

router.post('/', function(req, res) {
  var newTodont = {
    description: req.body.description,
    urgent: req.body.urgent
  };
  todontsList.push(newTodont);
  res.redirect('/todonts');
  console.log(todontsList);
})

router.delete('/:id', function(req, res) {
  todontsList.splice(req.params.id, 1);
  res.redirect('/todonts');
})

router.put('/:id', function(req, res) {
  var todontToEdit = todontsList[req.params.id];
  todontToEdit.description = req.body.description;
  todontToEdit.urgent = req.body.urgent;
  res.redirect('/todonts');
})

router.get('/:id/edit', function(req, res) {
  res.render('edit', {
    todont: todontsList[req.params.id],
    id: req.params.id
  });
});

router.get('/:id', function(req, res) {
  var toDonts = todontsList[req.params.id];
  res.render('show', {
    todonts: toDonts,
    id: req.params.id
  })
});




module.exports = router;
