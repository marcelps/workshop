(function() {
  'use strict';

  angular
   .module('filterDemo', [])
   .controller('filterController', filterController);

  function filterController() {
    var vm = this;

    vm.woman = ['Susan', 'Julie', 'Jasmine', 'Anne'];
  }
}());
