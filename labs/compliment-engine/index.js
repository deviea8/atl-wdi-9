var express = require('express');
var app = express();
var hbs = require('hbs');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
app.listen(port);

app.get("/", function(req,res) {
  var compliments = ["Your instructors love you", "High five = ^5", "Is it Ruby Tuesday yet?", "It's almost beer o'clock", "The Force is strong with you"];
  var backgroundColor = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
  res.render('index.hbs', {
    data: compliments[Math.floor(Math.random()*compliments.length)],
    color: backgroundColor[Math.floor(Math.random()*backgroundColor.length)],
  })
});

app.get("/:name", function(req,res) {
  var compliments = ["your instructors love you", "high five = ^5", "is it Ruby Tuesday yet?", "it's almost beer o'clock", "the Force is strong with you"];
  var backgroundColor = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
  res.render('index.hbs', {
    data: compliments[Math.floor(Math.random()*compliments.length)],
    color: backgroundColor[Math.floor(Math.random()*backgroundColor.length)],
    name: req.params.name
  })
});
