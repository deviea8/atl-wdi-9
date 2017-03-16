/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/* set up the application params*/
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({
    extended: true
}));

// log
app.use( logger('dev'));

/*Views*/
app.set('view engine', 'hbs');

/* HOME */
app.get('/', function(req,res) {
  res.send('This is the homepage.');
});

// controllers
var todosController = require('./controllers/todos.js');
app.use('/todos', todosController);

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
