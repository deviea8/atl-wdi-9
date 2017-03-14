var express = require('express'); // Loading the express module on our server
var app = express(); // Create a new instance of express on our server
var hbs = require('hbs'); // loads handlebars


app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'

app.set("view engine", "hbs"); //tells Express what to use for rendering templates

app.get('/', function(req, res) { // when a request comes in at localhost:3000/ it will respond
  res.send('Hello friend!');
});

app.get('/greeting', function(req, res) { // when a request comes in at localhost:3000/ it will respond
  // res.send('HEY, WDI 9!');
  console.log(req.query);
  res.render('greeting', {
    data: req.query.saying
  });
});

app.get('/favorite-foods', function(req, res) {
    var favoriteFoods = ["Jeni's almond butter brittle ice cream", 'Tacos from Superica', 'a breakfast sandwich from Gjelina to go in Venice', 'Croissants from Bottega Louie in downtown Los Angeles', 'Pizza from Little Star in San Francisco'];

    res.render('favorite-foods', {
        data: favoriteFoods
    });
});

app.get('/sightings', function(req, res) { // when a request comes in at localhost:3000/ it will respond
  console.log(req.route);
  console.log(req.query);
  res.send(`How many ufo sightings you think there are in ${req.query.state}? ${req.query.sights}.`);
});

// app.get('/favorite/:noun', function(req, res) { // when a request comes in at localhost:3000/ it will respond
//   console.log(req.route);
//   console.log(req.params);
//   console.log(req.query);
//   res.send(`I have a favorite ${req.params.noun}. It is ${req.query.color}.`);
//   console.log({params: req.params, queries: req.query});
// });

app.get('/bigfoot', function(req, res) { // when a request comes in at localhost:3000/ it will respond
  console.log(req.route);
  console.log(req.query);
  if (req.query.blurry == 'true') {
    res.send("It's not the photographes fault. Bigfoot is blurry.")
  }
  else {
    res.send("A group of researchers have amassed evidence.")
  }
});

// app.get('/:name', function(req, res) { // when a request comes in at localhost:3000/ it will respond
//   console.log(req.params);
//   console.log(req.route);
//   console.log(req.query);
//   res.send(`Hello, ${req.params.name}! My name is ${req.query.first_name} ${req.query.last_name}.`)
// });

// app.get('/rihanna', function(req, res) { // when a request comes in at localhost:3000/ it will respond
//   res.send('You searched for ' + req.query.q);
// });

// app.get('/:food', function(req, res) { // when a request comes in at localhost:3000/ it will respond
//   // console.log(req.params);
//   res.send(`Hello, ${req.params.food}!`);
// });


var port = process.env.PORT || 3000; // tells the server where to listen for requests

app.listen(port, function() {
// tells the server where to listen for requests on port 3000

  console.log('hello-express is listening on port 3000');
}); // actualizing the line above

