angular
  .module('travel-tainment')
  .controller('workshop', workshop);

function workshop() {
  var vm = this;

  vm.welcome = 'AngularJS';
}
