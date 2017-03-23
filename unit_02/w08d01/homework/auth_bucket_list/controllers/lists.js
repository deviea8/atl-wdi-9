//======================
// REQUIREMENTS
//======================
//require express,router,  mongoose, List schema, User schema, authHelpers
var express = require('express');
router = express.Router();
var User = require('../models/user.js');
var List = require('../models/list.js');
var authHelpers = require('../helpers/auth.js');


//New list item form page
router.get('/:id/lists/new', function(req, res){
  res.render('lists/new');
});

//======================
// CREATE
//======================
//create a POST "/" route that saves the list item to the logged in user


//======================
// EDIT
//======================
//create a GET "/:id/edit" route that renders the list's edit page
router.get('/:id/lists/edit', function(req, res){
  User.findById(req.params.id)
  .exec(function(err,user){
    if(err) {console.log(err)}
    res.render('users/edit', {
      user:user
    });
  });
});



//======================
// UPDATE
//======================
//create a PUT "/:id" route that saves the changes from the list.


//======================
// DELETE
//======================
//create a DELETE "/:id" route that deletes the list item


//======================
// EXPORTS
//======================
module.exports = router;
