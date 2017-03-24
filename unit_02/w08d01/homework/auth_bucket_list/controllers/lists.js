//======================
// REQUIREMENTS
//======================
//require express,router,  mongoose, List schema, User schema, authHelpers
var express = require('express');
var router = express.Router({mergeParams: true});
var User = require('../models/user.js');
var List = require('../models/list.js');
var authHelpers = require('../helpers/auth.js');


//======================
// CREATE
//======================
//create a POST "/" route that saves the list item to the logged in user
router.post('/', function createNewBucketListItem(req, res){
  User.findById(req.params.id)
    .exec(function (err, user){
      if (err) { console.log(err); }

      var newBucketListItem = new List ({
        name: req.body.name,
        completed: req.body.completed
      });
      var userId = req.params.id;
      user.list.push(newBucketListItem)
      user.save(function (err) {
        if (err) console.log(err);
        console.log(newBucketListItem);
      });

      res.redirect('/users/' + userId);
    });
});

//======================
// EDIT
//======================
//create a GET "/:id/edit" route that renders the list's edit page
router.get('/:itemId/edit', function(req, res){
  User.findById(req.params.id)
  .exec(function(err,user){
    if(err) {console.log(err)}
    res.send('hello')
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
router.delete('/:itemId', function deleteBucketListItem(req, res) {
  User.findById(req.params.id)
    .exec(function (err, user){
      if (err) { console.log(err); }

      user.list.itemId(req.params.itemId).remove();

      user.save(function (err) {
        if (err) console.log(err);
        console.log('Bucket list item was removed')
      });

      res.redirect('users/' + id)
      });
    });

//======================
// EXPORTS
//======================
module.exports = router;
