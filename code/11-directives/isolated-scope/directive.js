(function() {
  'use strict';

  angular
    .module('directivesDemo')
    // tt-isolated-scope
    // data-tt-isolated-scope
    .directive('ttIsolatedScope', ttIsolatedScope);

  function ttIsolatedScope() {
    return {
      scope: {
        // name info im html
        // message: '@info'
        message: '@',
        // two way binding
        age: '=',
        // callback function
        greet: '&'
      },
      templateUrl: './isolated-scope/template.html'
    }
  }
}());
