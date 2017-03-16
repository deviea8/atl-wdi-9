//packages
var express = require('express');
var hbs = require('hbs');
var recipesController = require('./controllers/recipes-controller.js');
var bodyParser = require('body-parser');
var data = require('./recipes.js');

//app settings
var app = express();
var port = process.env.PORT || 3000;

//homepage
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/public'));
app.use('/recipes', recipesController);

app.get('/new', function(req, res) {
  res.render('recipes/new')
});


app.post('/recipes', function(req, res) {
  var newRecipe = {
    title: req.body.title,
    veggie: req.body.veggie,
    imageUrl: req.body.imageUrl
  };
  data.seededRecipes.push(newRecipe);
  res.redirect('/recipes');
});

app.get('/recipes/:id', function(req, res) {
  var recipe = data.seededRecipes[req.params.id];
  res.render('recipes/show', {
    recipe: recipe
  });
});

//start server
app.listen(port, function() {
  console.log('ready');
});
