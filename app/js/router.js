'use strict';

app.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/home'});
  
}])
