(function() {
  'use strict';

  angular
    .module('qDemo')
    .controller('asyncController', AsyncController);

  AsyncController.$inject = ['asyncService', '$timeout'];

  function AsyncController(asyncService, $timeout) {
    var vm = this;

    vm.statusMessage = 'Pending...';
    vm.resolve = resolve;
    vm.reject = reject;

    function resolve() {
      asyncService
        .do(true)
        .then(
          onSuceed,
          onReject,
          onNotified
        )
        .finally(onFinish);
    }

    function reject() {
      asyncService
        .do(false)
        .then(
          onSuceed,
          onReject,
          onNotified
        )
        .finally(onFinish);
    }

    function onSuceed(reason) {
      vm.statusMessage = reason;
    }

    function onReject(reason) {
      vm.statusMessage = reason;
    }

    function onNotified(reason) {
      //vm.statusMessage = reason;
      console.info(reason);
    }

    function onFinish(reason) {
      $timeout(function() {vm.statusMessage = 'Pending...'; }, 2000);
    }
  }
}());
