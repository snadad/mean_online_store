console.log('dashboardController has started');
app.controller('dashboardController', function($scope, productFactory, $routeParams, $cookieStore, $location) {
  $scope.user_name = $cookieStore.get('user_name')
  $scope.user_id = $cookieStore.get('user_id')
  $scope.addproduct;
  $scope.productList = [];
   productFactory.index( function(returnedData){
     $scope.productList = returnedData;
   });
   if ($scope.user_name === 'admin'){
     console.log('Admin!');
     $scope.addproduct = 'Add Product'
   }
   $scope.addthis = function() {
     $location.url('/addproduct')
   }



    //  $scope.update = function(){
  //    loginFactory.update($scope.friend, function(data){
  //      $scope.friend = data
  //    })
  //   //
  //    }

});
