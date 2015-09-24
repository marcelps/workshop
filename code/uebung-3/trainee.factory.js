(function() {
  'use strict';

  angular
    .module('factories', [])
    .factory('tripsFactory', tripsFactory);

  function tripsFactory() {

    // Objektliteral
    return {
      trips: trips
    };

    function trips() {
      return [{
        name: 'Lissabon City Trip',
        country: 'Portugal',
        stars: 3.5,
        reviewCount: 23
      },
      {
        name: 'Rom City Trip',
        country: 'Italien',
        stars: 4,
        reviewCount: 15
      }];
    }
  }
}());
