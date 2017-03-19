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
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

//controllers
var pokemonController = require('./controllers/pokemon.js');
app.use('/pokemon', pokemonController);

//start server
app.listen(port, function() {
  console.info('server ready');
});
