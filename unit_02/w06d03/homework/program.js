// // start level: HELLO WORLD

// // packages
// var express = require('express');

// // app settings
// var app = express();
// var port = process.env.PORT || process.argv[2];

// // homepage
// app.get ('/home', function (req, res) {
//   res.send('Hello World!');
// });

// // start server
// app.listen(port, function() {
//   console.log('ready');
// })


// start level: STATIC

// // packages
// var express = require('express');

// // app settings
// var app = express();
// var port = process.env.PORT || process.argv[2];

// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

// // start server
// app.listen(port, function() {
//   console.log('ready');
// })

// start level: GOOD OLD FORM

// packages
var express = require('express');
var bodyparser = require('body-parser')

// app settings
var app = express();
var port = process.env.PORT || process.argv[2];

app.use(bodyparser.urlencoded({extended: true}))

// form
app.post('/form', function(req, res) {
  var reverseInput = function() {
    return req.body.str.split('').reverse().join('');
  }
  res.send(reverseInput());
})

// start server
app.listen(port, function() {
  console.log('ready');
})


