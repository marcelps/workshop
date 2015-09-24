(function() {

  angular
    .module('directives', ['factories'])
    .controller('DirectivesController', Controller);

  Controller.$inject = ['tripsService'];

  function Controller(tripsService) {
    this.trips = tripsService.getTripsOfCountry('Portugal');
  }
}());
