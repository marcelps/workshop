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
      template: '<p class="lead">{{vm.message}}</p>'
    }
  }
}());
