var mongoose = require('mongoose');
console.log('user model');
var UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String
})
var User = mongoose.model('User', UserSchema);
