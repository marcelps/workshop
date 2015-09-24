(function() {
  'use strict';

  angular
    .module('qDemo')
    .service('asyncService', AsyncService);

  AsyncService.$inject = ['$q', '$timeout'];

  function AsyncService($q, $timeout) {
    this.do = doIt;

    function doIt(shouldResolve) {
      var deferral = $q.defer();

      $timeout(function() {
        deferral.notify('Start DoIt...');
      }, 0);

      $timeout(function() {
        deferral.notify('Try to resolve the request...');

        if (shouldResolve) {
          deferral.notify('Resolved');
          deferral.resolve('Your request has been resolved');
        } else {
          deferral.notify('Rejected');
          deferral.reject('There was a problem resolving the request');
        }
      }, 3000);

      return deferral.promise;
    }
  }
}());
