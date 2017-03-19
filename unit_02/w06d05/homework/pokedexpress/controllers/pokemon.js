//***************************
// REQUIREMENTS
//***************************
// Set up your express dependency here:

//dependencies
var express = require('express');
var router = express.Router();
var data = require('../models/poke_array.js');


router.get('/', function(req, res) {
  res.render('index', {
    pokemon: data
  });
});

router.get('/index/:id', function(req, res) {
  res.render('show', {
    pokeName: data[req.params.id].name,
    pokeImg: data[req.params.id].img,
    pokeType: data[req.params.id].type,
    pokeStats: data[req.params.id].stats,
  });
});


//render form to add new
router.get('/new', function(req, res) {
  res.render('new');
});

//create
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
