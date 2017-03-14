var http = require('http');
var urlParser = require('url');
var express = require('express'); // Loading the express module on our server
var hbs = require('hbs');
var app = express();

app.get('/', function(req, res) { // when a request comes in at localhost:3000/ it will respond
});

var port = process.env.PORT || 3001; // tells the server where to listen for requests

app.listen(port, function() {
// tells the server where to listen for requests on port 3000
  console.log('hello-express is listening on port 3001');
}); // actualizing the line above


app.set("view engine", "hbs");

app.get('/shows', function(req, res) {
    var faveShows = ["Black Mirror", 'American Horror Story', 'Jeopardy', 'The Carbonaro Effect', 'Making a Murderer'];
    res.render('favorite-shows', {
        data: faveShows
    });
});

app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'


// server.on('request', function(request, response) {
//   console.log(request.url);
//   var urlObj  = urlParser.parse( request.url );
//   var pathname = urlObj.pathname;
//   console.log("requested: " + pathname);
//   if (pathname === '/fun-times') {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.write('<html><h1>Fun Times</h1><ul><li>Go Hiking</li><li>Sing</li><li>Play With My Dog</li></ul></html>');
//   }
//   else if (pathname === '/movies') {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.write('<html><h1>Favorite Movies</h1><ul><li>The Shawshank Redemption</li><li>The Revenant</li><li>Pans Labyrinth</li></ul></html>');
//   }
//   else if (pathname === '/portfolio') {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.write('<html><h1>Coming Soon</h1></html>');
//   }
//   else if (pathname === '/') {
//     response.write('<html>Good story,friend.');
//     response.write('<script>console.log(\'Sooooo\');</script>');
//     response.write('</html>');
//   }

  // console.log(request.url);
  // response.end();

// });
