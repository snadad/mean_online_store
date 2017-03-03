console.log('dashboardController has started');
app.controller('dashboardController', function($scope, productFactory, $routeParams, $cookieStore, $location) {
  $scope.user_name = $cookieStore.get('user_name')
  $scope.user_id = $cookieStore.get('user_id')
  $scope.addproduct;
  $scope.productList = [];
  $scope.cart = $cookieStore.get('cart')
  $scope.cart_total = cartTotal()

  function cartTotal(){
    var sum = 0;
    for(var i=0; i < $scope.cart.length; i++){
        sum += Number($scope.cart[i].price)
    }
    return sum;
  }

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
   $scope.addCart = function(n){
     if (!$cookieStore.get('cart')){
       $cookieStore.put('cart', []);
     }
     var array = $cookieStore.get('cart');
     array.push(n);
     $cookieStore.put('cart', array);
    console.log("this is cookieStore.get(cart): ", $cookieStore.get('cart'))
   }

   $scope.removeItem = function(item){
     var index = $scope.cart.indexOf(item)
     $scope.cart.splice(index, 1)
     var array = $scope.cart
     $cookieStore.put('cart', array);
     $scope.cart_total = cartTotal()
   }
   $scope.checkout = function(){
     console.log("cookiecart: ", $cookieStore.get('cart'))
   }


    //  $scope.update = function(){
  //    loginFactory.update($scope.friend, function(data){
  //      $scope.friend = data
  //    })
  //   //
  //    }

});
