console.log('loginController has started');
app.controller('loginController', ['$scope','loginFactory', '$location','$routeParams', function($scope, loginFactory, $location, $routeParams) {
  $scope.login = function(){
    loginFactory.login($scope.user, function(data){
      if (data.errors){
        $scope.errors = data.errors;
        console.log($scope.errors);
      }
      else{
        $location.url("/dashboard")
      }
    })
  }




}]);
