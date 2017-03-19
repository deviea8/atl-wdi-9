//dependencies
var express = require('express');
var router = express.Router();
var data = require('../models/poke_array.js');

//index page
router.get('/', function(req, res) {
  res.render('index', {
    pokemon: data
  });
});

//render form to add new pokemon
router.get('/new', function(req, res) {
  res.render('new');
});

//create new pokemon
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

//individual pokemon details page
router.get('/index/:id', function(req, res) {
  res.render('show', {
    pokeName: data[req.params.id].name,
    pokeImg: data[req.params.id].img,
    pokeType: data[req.params.id].type,
    pokeStats: data[req.params.id].stats,
    id: req.params.id
  });
});

router.get('/index/:id/edit', function(req, res) {
  res.render('edit', {
    pokemon: data[req.params.id],
    pokeName: data[req.params.id].name,
    id: req.params.id
  });
});

//delete
router.delete('/index/:id', function(req, res){
  data.splice(req.params.id, 1);
  res.redirect('/pokemon');
});

//update
router.put('/index/:id', function(req, res){
  var pokemonToEdit = data[req.params.id];
  pokemonToEdit.name = req.body.name;
  pokemonToEdit.type = [req.body.type];
  pokemonToEdit.stats = {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
      spattack: req.body.spattack,
      spdefense: req.body.spdefense,
      speed: req.body.speed
    };
  id: req.params.id;
  res.redirect('/pokemon/');
});


//exports
module.exports = router;
