var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/orange', {
    templateUrl: 'views/orange.html',
  }).
  when('/apple', {
    templateUrl: 'views/apple.html',
  }).
  otherwise({
    redirectTo: '/'
  });
}]);
