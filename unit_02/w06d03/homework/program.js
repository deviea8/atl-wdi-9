// start level: HELLO WORLD

// packages
var express = require('express');

// app settings
var app = express();
var port = process.env.PORT || process.argv[2];

// homepage
app.get ('/home', function (req, res) {
  res.send('Hello World!');
});

// start server
app.listen(port, function() {
  console.log('ready');
})
