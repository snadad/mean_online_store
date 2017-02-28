var mongoose = require('mongoose');
console.log('friends model');
var FriendSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  birthday: Number
})
var Friend = mongoose.model('Friend', FriendSchema);
