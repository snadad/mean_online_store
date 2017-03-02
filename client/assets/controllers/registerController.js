console.log('registerController has started');
app.controller('registerController', ['$scope','loginFactory','$cookieStore','$routeParams', '$location', function($scope, loginFactory, $cookieStore, $routeParams, $location) {
$scope.errors = [];
$scope.create = function(){
  loginFactory.create($scope.newUser, function(data){
    if (data.errors){
      $scope.errors = data.errors;
    }
    else{
      $location.url("/dashboard")

    }
  })
}


}]);
