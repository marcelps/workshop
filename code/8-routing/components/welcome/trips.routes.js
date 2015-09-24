(function() {
  'use strict';

  angular
    .module('trips')
    .config(routes);

  function routes($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'components/welcome/trips.html',
        controller: 'tripsController',
        controllerAs: 'trips'
      });

  }
}());
