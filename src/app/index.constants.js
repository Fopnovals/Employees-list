/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('Test')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('colors', ['#f1e2cb', '#ecdade', '#e4f7e3', '#f1ffff']);

})();
