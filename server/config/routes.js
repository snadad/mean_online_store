var mongoose = require('mongoose');
var user = require('../controllers/user')
var path = require('path')

console.log('routes');
module.exports = function(app){
app.post('/newuser', function(request, response) {
  user.create(request, response);
});
// app.get('/edit/:id', function(request, response) {
//   friends.show(request, response);
// });
// app.post('/friends', function(request, response) {
//   friends.create(request, response);
// });
// app.put('/friends/:id', function(request, response) {
//   friends.update(request, response);
// });
// app.delete('/friends/:id', function(request, response) {
//   friends.delete(request, response);
// });
}
