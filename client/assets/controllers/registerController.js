console.log('registerController has started');
app.controller('registerController', ['$scope','loginFactory','$routeParams', function($scope, loginFactory, $routeParams) {

  //     loginFactory.index(function(data) {
  //     $scope.friends = data;
  //     })
  // $scope.create = function() {
  //     loginFactory.create($scope.newFriend, function(data) {
  //         loginFactory.index(function(data) {
  //             $scope.friends = data;
  //             $scope.newFriend = {};
  //         })
  //     });
  // }
  // $scope.delete = function(friend){
  //   loginFactory.delete(friend, function(data){
  //     loginFactory.index(function(data){
  //       $scope.friends = data;
  //     });
  //   });
  // }
  // $scope.show = function(friend){
  //   loginFactory.show(friend, function(data){
  //     console.log(data);
  //     $scope.data = data;
  //   })
  // }
}]);
