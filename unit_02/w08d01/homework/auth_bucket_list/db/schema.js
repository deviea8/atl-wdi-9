var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

//add ListSchema here
//your code
var ListSchema = new Schema({
  name: String,
  completed: Boolean
});

var UserSchema = new Schema({
  username: String,
  email: String,
  password_digest: String,
  list: [ListSchema],
  created_at: Date,
  updated_at: Date
});

//add a ListSchema.pre function (just like UserSchema below)
//your code

ListSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next();
});

var ListModel = mongoose.model('List', ListSchema);

UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next();
});

var UserModel = mongoose.model('User', UserSchema);


//var ListModel model
//your code

//export List below
module.exports = {
  User: UserModel,
  List: ListModel
};
