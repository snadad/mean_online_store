console.log('productFactory has started');
app.factory('productFactory', ['$http', function($http) {
  var factory = {};

  factory.addProduct = function(newProduct, callback) {
    $http.post('/addproduct', newProduct).then(function(response){
      if(typeof callback === 'function'){
        callback(response.data);
      }
    })
  }




  return factory;
}]);
