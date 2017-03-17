//packages
var express = require('express');
var hbs = require('hbs');
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
app.use(express.static('public'));

//controllers
var todontsController = require('./controllers/todonts-controller.js');
app.use('/todonts', todontsController);

//start server
app.listen(port, function() {
  console.log('server ready');
})
