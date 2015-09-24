(function() {
  'use strict';

  angular
    .module('directivesDemo')
    // tt-shared-scope
    // data-tt-shared-scope
    .directive('ttSharedScope', ttSharedScope);

  function ttSharedScope() {
    return {
      // plugin emmet
      templateUrl: './shared-scope/directive.shared-scope.html'
    }
  }
}());
