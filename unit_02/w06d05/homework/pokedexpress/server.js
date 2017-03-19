//packages
var express = require('express');
var hbs = require('hbs');

//middleware
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//app settings
var app = express();
var port = process.env.PORT || 3000;

//app params
app.set('view engine', 'hbs');

//controllers
var pokemonController = require('./controllers/pokemon.js');
app.use('/pokemon', pokemonController);

//start server
app.listen(port, function() {
  console.info('server ready');
});
