(function() {
  'use strict';

  angular
    .module('directivesDemo')
    .directive('ttTraveller', ttTraveller);

  function ttTraveller() {
    return {
      scope: {
        traveller: "="
      },
      templateUrl: './transclusion/ttTraveller.html',
      controller: TravellerController,
      controllerAs: 'tt',
      bindToController: true
    };
  }

  function TravellerController() {
    var vm = this;

    vm.checkIn = checkIn;

    function checkIn() {
      console.info(vm.traveller, ' has been checked in...');
    }
  }
}());
