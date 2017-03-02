console.log('navController has started');
app.controller('navController', function($scope, loginFactory, $routeParams, $cookieStore, $location) {
  $scope.user_name = $cookieStore.get('user_name');
  $scope.addproductbutton = "";
  console.log($scope.addproductbutton);
  if($scope.user_name === 'admin'){
    console.log('about to add');
    $scope.addproductbutton = 'Add Product'
  }

});
