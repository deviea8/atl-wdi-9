//***************************
// REQUIREMENTS
//***************************
// Set up your express dependency here:

//dependencies
var express = require('express');
var router = express.Router();
var data = require('../models/poke_array.js');


//***************************
// READ
//***************************
// Note: All the routes below can be accessed at `localhost:3000/pokemon` + `resource`
// Make a GET route '/' that will render an index page of all pokemon images
router.get('/', function(req, res) {
  res.render('index', {
    pokemon: data
  });
});



// Make a GET route '/index/:index' that will render the Pokemon's show page at that :index
router.get('/index/:id', function(req, res) {
  res.render('show', {
    pokeName: data[req.params.id].name,
    pokeImg: data[req.params.id].img,
    pokeType: data[req.params.id].type,
    pokeStats: data[req.params.id].stats,
  });
});


// Example: a user goes to 'localhost:3000/pokemon/index/0' in the browser and data for Bulbasaur (the pokemon at index 0) will be displayed.

// Make a GET route '/new' that will simply render a form to create a new Pokemon
router.get('/new', function(req, res) {
  res.render('new');
});

router.post('/', function(req, res) {
  var newPokemon = {
    name: req.body.name,
    img: req.body.img,
    type: [req.body.type],
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
      spattack: req.body.spattack,
      spdefense: req.body.spdefense,
      speed: req.body.speed
    }
  };
  data.push(newPokemon);
  res.redirect('/pokemon');
});






//***************************
// CREATE
//***************************
//make a POST route '/' to create a New Pokemon


//***************************
// UPDATE
//***************************

//***************************
// DELETE
//***************************
//make a DELETE route '/:index' that will delete the Pokemon at this index.



//***************************
// EXPORTS
//***************************
module.exports = router;
