(function() {
  'use strict';

  angular
    .module('Test')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      });

    $stateProvider
      .state('edit', {
        url: '/edit',
        templateUrl: 'app/edit/edit.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
