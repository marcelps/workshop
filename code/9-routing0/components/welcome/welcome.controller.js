(function() {
  'use strict';

  angular
   .module('welcome')
   .controller('welcomeController', WelcomeController);

  WelcomeController.$inject = ['$routeParams'];

  function WelcomeController($routeParams) {
    var vm = this;

    vm.id = $routeParams.id;
    vm.name = $routeParams.name;
  }
}());
