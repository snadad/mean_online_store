console.log('dashboardController has started');
app.controller('dashboardController', function($scope, productFactory, loginFactory, $routeParams, $cookieStore, $location) {
  $scope.user_name = $cookieStore.get('user_name')
  $scope.user_id = $cookieStore.get('user_id')
  $scope.addproduct;
  $scope.productList = [];
  $scope.cart = $cookieStore.get('cart')
  $scope.cart_total = cartTotal()
  $scope.addproductbutton = "";

  showAdminMenu()

  $scope.logoutClick = function(){
    $cookieStore.remove("userloggedin")
    $cookieStore.remove("cart")
    $cookieStore.remove("user_name")
    $cookieStore.remove("user_id")
    $location.url('/dashboard')
  }

  function showAdminMenu(){
    if($scope.user_name === 'admin'){
      // $scope.addproductbutton = 'Add Product'
      $(".add-product").show()
    } else {
      $(".add-product").hide()
    }
  }
console.log("cookiestore userloggedin ",$cookieStore.userloggedin)
    if($cookieStore.get("userloggedin")){
      $(".login-toggle").hide()
      $(".logout-toggle").show()
    } else {
      $(".login-toggle").show()
      $(".logout-toggle").hide()
    }


  function cartTotal(){
    var sum = 0;
      if ($cookieStore.get('cart')){
        for(var i=0; i < $scope.cart.length; i++){
            sum += Number($scope.cart[i].price)
        }
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

     alert("Item added!")
     $scope.cartItemNum = $cookieStore.get('cart').length

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
