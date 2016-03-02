'use strict';

var app = angular.module('IzzYDriver', [
  'ui.router',
  'ui.bootstrap',
  'btford.socket-io',

], function ($provide) {
  // Prevent Angular from sniffing for the history API
  // since it's not supported in packaged apps.
  $provide.decorator('$window', function ($delegate) {
    $delegate.history = false;
    return $delegate;
  })
})
  .run(
    ['$rootScope', '$state', '$stateParams', '$q',
      function ($rootScope, $state, $stateParams, $q) {
  
        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

      }])
  .config(function (
    $stateProvider,
    $urlRouterProvider
    ) {
  
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/top");
    //
    // Now set up the states
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: "partials/top",
        controller: "topCtrl"
      })
      .state('func1', {
        url: '/func1',
        templateUrl: "partials/func1",
        controller: "func1Ctrl"
      })
      .state('func2', {
        url: '/func2',
        templateUrl: "partials/func2",
        controller: "func2Ctrl"
      })
   });