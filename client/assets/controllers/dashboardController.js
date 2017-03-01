console.log('dashboardController has started');
app.controller('dashboardController', function($scope, productFactory, $routeParams) {

  $scope.productList = [];
  //{name: "test1", price:14.50},{name: "bowl2", price:49.99}
   productFactory.index( function(returnedData){
     $scope.productList = returnedData;
   });
  //  $scope.update = function(){
  //    loginFactory.update($scope.friend, function(data){
  //      $scope.friend = data
  //    })
  //   //
  //    }

});
