//packages
var express = require('express');
var hbs = require('hbs');
var bodyParser = require('body-parser');

//app settings
var app = express();
var port = process.env.PORT || 3000;

//app params
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//routes
app.get('/', function(req, res) {
  res.send('homepage');
});

//controllers
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);

//start server
app.listen(port, function() {
  console.info('server ready')
});
