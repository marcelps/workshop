// Container/Schrank
angular
  // Schublade -> [] Module anlegen
  .module('moduleA', [])
  // Kleidungsstueck
  .controller('controllerA', controllerA);



function controllerA() {
  var vm = this;
  vm.greeting = 'Hallo TT';
}
