(function() {
  'use strict';

  angular
    .module('trips')
    .config(routes);

  function routes($routeProvider) {

    $routeProvider
      .when('/welcome', {
        templateUrl: 'components/welcome/welcome.html'
      });
  }
}());
