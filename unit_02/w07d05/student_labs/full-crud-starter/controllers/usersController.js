var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// Index - Users
router.get('/', function(req, res){
  User.find()
    .exec(function(err, users){
      if (err) { console.log(err); }
      console.log(users);
      res.render('users/index', {
        users: users
      });
    });
});

// New User (Form Page)
router.get('/new', function(req, res) {
  res.render('users/new');
});

// Post/Create New User
router.post('/', function(req, res){
  var user = new User({
    first_name: req.body.first_name,
    email: req.body.email
  });
  user.save(function(err, user){
    if (err) { console.log(err); }
    console.log(user);
    res.redirect('/users');
  });
});

// Edit User (Form Page)
router.get('/:id/edit', function(req, res) {
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) { console.log(err); }
    res.render('users/edit', {
      user: user
    });
  });
});

// Update user in database
router.put('/:id', function(req, res){
  User.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
    email: req.body.email
  }, { new: true })
  .exec(function(err, user){
    if (err) { console.log(err); }
    console.log(user);
    res.render('users/show', {
      user: user
    });
  });
});

// User show page
router.get('/:id', function(req, res){
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) { console.log(err); }
    console.log(user);
    res.render('users/show', {
      user: user
    });
  });
});

// Delete user
router.delete('/:id', function(req, res){
  User.findByIdAndRemove(req.params.id)
  .exec(function(err, user) {
    if (err) {console.log(err); }
    console.log('User deleted!');
    res.redirect('/users');
  });
});

// Index - Items
router.get('/:id/items', function(req, res){
  User.findById(req.params.id)
    .exec(function(err, user){
      if (err) { console.log(err); }
      console.log(user.id);
      console.log(user.items);
      res.render('items/index', {
        items: user.items,
        user: user
      });
    });
});

// Create Item
router.post('/:id/items', function(req, res){
  User.findById(req.params.id)
  .exec(function(err, user){
    user.items.push(new Item({name: req.body.name}));
    user.save(function(err){
      if (err) {console.log(err);}
      res.send(user);
    });
  });
});

// New Item (Form Page)
router.get('/:userId/items/new', function(req, res) {
  res.render('items/new', {
    userId: req.params.userId
})
});

// Post/Create New Item
router.post('/', function (req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err) }

      var newItem = {
        description: req.body.description,
        in_progress: req.body.in_progress
      }

      user.items.push(newItem)

      user.save(function (err) {
        if (err) console.log(err);
        console.log('New Item created')
      });

      res.redirect('/users')
    });
});

// Edit Item (Form Page)
router.get('/:userId/items/:id/edit', function(req, res) {
  User.findById(req.params.userId)
  .exec(function(err, user) {
    if (err) { console.log(err); }
    res.render('users/edit', {
      user: user,
      item: user.item(req.params.id)
    });
  });
});

// Edit Item
router.put('/:id/items', function(req, res){
  User.findById(req.params.id)
  .exec(function(err, user){
    user.items.push(new Item({name: req.body.name}));
    user.save(function(err){
      if (err) {console.log(err);}
      res.send(user);
    });
  });
});

// Remove Item
router.delete('/:userId/items/:id', function(req, res){
  User.findByIdAndUpdate(req.params.userId, {
    $pull:{
      items: {_id: req.params.id}
    }
  })
  .exec(function(err, item){
    if (err) {console.log(err);}
    res.redirect('/users')
  });
});


module.exports = router;
