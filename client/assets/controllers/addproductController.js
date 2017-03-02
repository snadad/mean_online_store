console.log('addProductController has started');
app.controller('addProductController', ['$scope', '$cookieStore','productFactory','$routeParams', '$location', function($scope, $cookieStore, productFactory, $routeParams, $location) {
if (!$cookieStore.get('user_name') === 'admin'){
  console.log('Not Admin');
  $location.url("/dashboard")
}
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
