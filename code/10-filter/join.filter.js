(function() {
  'use strict';

  angular
    .module('filterDemo')
    .filter('join', join);

  function join() {
    return function(list, separator) {
      if (list === undefined) {
        return '';
      } else if (!Array.isArray(list)) {
        return list;
      }

      list = list.filter(function(n) {
        return n !== undefined;
      });

      return list.join(separator || ' ---DEFAULT--- ');
    }
  }
}());
