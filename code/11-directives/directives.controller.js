(function() {
  'use strict';

  angular
    .module('directivesDemo')
    .controller('directivesController', directivesController);

  function directivesController() {
    var vm = this;

    vm.message = 'Our first directive goes here';
    vm.age = 39;
    vm.greet = greet;

    function greet(age) {
      alert('Du bist ' + age);
    }
  }
}());
