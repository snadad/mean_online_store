console.log('addProductController has started');
app.controller('addProductController', ['$scope','productFactory','$routeParams', '$location', function($scope, productFactory, $routeParams, $location) {

  $scope.addProduct = function(){
    productFactory.addProduct($scope.newProduct, function(data){
      if (data.errors){
        $scope.errors = data.errors;
        console.log(data.errors);
      }
      else{
        $location.url("/dashboard")

      }
    })
  }

  }]);
