var mongoose = require('mongoose');
var user = require('../controllers/user');
var product = require('../controllers/product')
var path = require('path')

console.log('routes');
module.exports = function(app){


app.post('/newuser', function(request, response) {
  user.create(request, response);
});

app.post('/login', function(request, response){
  user.login(request, response);
})

app.post('/addproduct', function(request, response){
  product.addproduct(request, response);
});

app.get('/getproducts', function(request, response){
  product.index(request, response)
});


}
