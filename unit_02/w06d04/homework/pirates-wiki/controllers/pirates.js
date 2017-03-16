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
  res.render('new');
});

router.post('/', function(req,res) {
  var newPirate = {
    name: req.body.name,
    birthplace: req.body.birthplace,
    death_year: req.body.death_year,
    base: req.body.base,
    nickname: req.body.nickname
  };
  pirates.push(newPirate);
  res.redirect('/pirates');
});


router.get('/:id', function(req,res) {
    var pirateInfo = pirates[req.params.id];
    res.render('show', {
      pirate: pirateInfo
    });
  });


//exports
module.exports = router;
