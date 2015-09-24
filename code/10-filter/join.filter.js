(function() {
  'use strict';

  angular
    .module('filterDemo')
    .filter('join', join);

  function join() {
    return function(list, separator) {
      return list.join(separator || ' ---DEFAULT--- ');
    }
  }
}());
