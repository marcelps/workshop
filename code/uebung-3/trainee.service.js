(function() {
  'use strict';

  angular
    .module('factories')
    .service('tripsService', tripsService);

  tripsService.$inject = ['tripsFactory']

  function tripsService(tripsFactory) {

    // Objektliteral
    this.getTripsOfCountry = getTripsOfCountry;

    function getTripsOfCountry(country) {
      var matchingCountry = tripsFactory.trips().filter(function(m) {
        return m.country == country;
      });
      console.log(matchingCountry);
      return matchingCountry;
    }
  }
}());
