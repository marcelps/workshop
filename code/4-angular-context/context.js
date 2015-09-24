angular
  .module('digest', [])
  .controller('controller', controller);

function controller($timeout) {
  var vm = this;

  vm.name = 'Gregor';

  $timeout(function() {
    vm.name = 'Alexander';
    console.log('READY!!');
  }, 5000);

  /*
  https://docs.angularjs.org/api/ng/service
     - $interval
     - $window
   */
}
