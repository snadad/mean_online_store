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
  factory.index = function(callback){
    $http.get("/indexproducts").then(function(response){
      if(response.errors){
        console.log("Factory Product ERROR: ", response.errors)
      } else {
        callback(response.data)
      }
    })
  }


  return factory;
}]);
