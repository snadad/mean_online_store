console.log('app.js in assets has started');
var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/register', {
      templateUrl: 'partials/register.html',
      controller : 'registerController'
    })
    .when('/login',{
      templateUrl: 'partials/login.html',
      controller : 'loginController'
    })
    .otherwise({
      redirectTo: '/'
    })
});
