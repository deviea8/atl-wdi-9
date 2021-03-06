var http = require('http');

var urlParser = require('url');

var server = http.createServer().listen(3001);

console.log('I\'m listening on port: 3001');

server.on('request', function(request, response) {
  console.log(request.url);
  var urlObj  = urlParser.parse( request.url );
  var pathname = urlObj.pathname;
  console.log("requested: " + pathname);
  if (pathname === '/fun-times') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<html><h1>Fun Times</h1><ul><li>Go Hiking</li><li>Sing</li><li>Play With My Dog</li></ul></html>');
  }
  else if (pathname === '/movies') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<html><h1>Favorite Movies</h1><ul><li>The Shawshank Redemption</li><li>The Revenant</li><li>Pans Labyrinth</li></ul></html>');
  }
  else if (pathname === '/portfolio') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<html><h1>Coming Soon</h1></html>');
  }
  else if (pathname === '/') {
    response.write('<html>Good story,friend.');
    response.write('<script>console.log(\'Sooooo\');</script>');
    response.write('</html>');
  }

  console.log(request.url);
  response.end();

});
