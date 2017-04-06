var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/presidents-app');

<<<<<<< HEAD
app.use(cors());

=======
>>>>>>> 15c7fd952a864e696511e210b0b2fbeb10978a19
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var presidentsController = require("./controllers/presidents.js");
app.use('/presidents', presidentsController);

<<<<<<< HEAD
=======
app.use(cors());

>>>>>>> 15c7fd952a864e696511e210b0b2fbeb10978a19
app.use(express.static('public'));

app.listen(3000);
