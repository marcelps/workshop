// Container/Schrank
angular
  // Schublade -> [] Module anlegen
  .module('moduleA')
  // Kleidungsstueck
  .controller('controllerB', controllerB);

function controllerB() {
  var vm = this;
  vm.greeting = 'und so weiter';
}
