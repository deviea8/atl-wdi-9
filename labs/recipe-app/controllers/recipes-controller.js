var express = require('express');
var hbs = require('hbs');
var data = require('../recipes.js');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('recipes/index', {
    recipe: data.seededRecipes
  });
})

module.exports = router;
