//requirements
var express = require('express');
var router = express.Router();
var pirates = require('../models/pirates.js');

//all routes for /pirate
router.get('/', function(req,res) {
  res.render('index', {
    pirateName: pirates
  });
});

router.get('/new', function(req,res) {
  res.send('this is the new page');
});

router.get('/post', function(req,res) {
  res.send('this is the create page');
});


router.get('/:id', function(req,res) {
    var pirateInfo = pirates[req.params.id];
    res.render('show', {
      pirate: pirateInfo
    });
  });


//exports
module.exports = router;
