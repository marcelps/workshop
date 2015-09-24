(function() {

  angular
    .module('directives', ['factories'])
    .controller('DirectivesController', Controller);

  Controller.$inject = ['trainees'];

  function Controller(trainees) {
    this.people = trainees.getAll();
  }
}());
