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
        message: '@'
      },
      // plugin emmet
      templateUrl: './isolated-scope/template.html'
    }
  }
}());
