console.log('loginController has started');
app.controller('loginController', ['$scope','loginFactory', '$location','$cookieStore','$routeParams', function($scope, loginFactory, $location, $cookieStore,  $routeParams) {

  $scope.login = function(){
    loginFactory.login($scope.user, function(data){
      if (data.errors){
        $scope.errors = data.errors;
      }
      else{
        var user_name = $cookieStore.get('user_name');
        $scope.logged_user = user_name;
        console.log($scope.logged_user);
        $location.url('/')
      }
    })
  }




}]);
