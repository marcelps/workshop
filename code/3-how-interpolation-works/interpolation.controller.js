angular
  .module('interpolation', [])
  .controller('demo', controller);

function controller($scope, $interpolate) {
  var vm = this;

  vm.expression = $interpolate('{{ value | uppercase }}');
  vm.firstname = 'Gregor';

  $scope.$watch(objectsOfInterest, updateObjects);

  function objectsOfInterest() {
    return vm.firstname;
  }

  function updateObjects(newValue, oldValue) {
    vm.result = vm.expression({
      value: newValue
    });
  }

  //                              Objektliteral
  vm.result = vm.expression({ value: vm.firstname });
  console.log(vm.result);
}
