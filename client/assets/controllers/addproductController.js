console.log('addProductController has started');
app.controller('addProductController', ['$scope', '$cookieStore','productFactory','$routeParams', '$location', function($scope, $cookieStore, productFactory, $routeParams, $location) {

  $scope.addProduct = function(){
    productFactory.addProduct($scope.newProduct, function(data){
      if (data.errors){
        $scope.errors = data.errors;
      }
      else{
        $location.url("/dashboard")
      }
    })
  }

  }]);
