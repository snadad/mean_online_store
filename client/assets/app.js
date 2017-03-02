console.log('app.js in assets has started');
var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller : 'loginController'
  })
    .when('/register', {
      templateUrl: 'partials/register.html',
      controller : 'registerController'
    })
    .when('/addproduct', {
      templateUrl: 'partials/addproduct.html',
      controller : 'addProductController'
    })
    .when('/login',{
      templateUrl: 'partials/login.html',
      controller : 'loginController'
    })
    .when('/dashboard',{
      templateUrl: 'partials/dashboard.html',
      controller : 'dashboardController'
    })
    .when('/cart',{
      templateUrl: 'partials/cart.html',
      controller : 'dashboardController'
    })
    .otherwise({
      redirectTo: '/'
    })
});
