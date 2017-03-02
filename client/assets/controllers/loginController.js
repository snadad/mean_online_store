console.log('loginController has started');
app.controller('loginController', ['$scope','loginFactory', '$location','$cookieStore','$routeParams', function($scope, loginFactory, $cookieStore, $location, $routeParams) {

  $scope.login = function(){
    loginFactory.login($scope.user, function(data, cookiestore){
      if (data.errors){
        $scope.errors = data.errors;
      }
      else{
        $scope.user = cookiestore;
        console.log($scope.user);
        // $location.url("/dashboard")
      }
    })
  }




}]);
