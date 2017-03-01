console.log('app.js in assets has started');
var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
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
      controller : 'loginController'
    })
    .otherwise({
      redirectTo: '/'
    })
});
