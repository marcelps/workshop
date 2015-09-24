angular
  .module('travel-tainment')
  .controller('workshop', workshop);

function workshop() {
  var vm = this;

  vm.people = [
    {
      firstname: 'a',
      lastname: 'b'
    },
    {
      firstname: 'c',
      lastname: 'd'
    },
    {
      firstname: 'e',
      lastname: 'f'
    }
  ];
}
