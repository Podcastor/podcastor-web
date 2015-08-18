/**
 * Load modules for application
 */

var app = angular.module('podcastor', ['ui.router']);

// set our API host
app.constant('appConfig', {
    title: 'Podcastor',
    baseApi: 'http://127.0.0.1:8000/api'
});

// start up
app.run(function($rootScope, $location, $state, $window, appConfig){
    $rootScope.appConfig = appConfig;
    $rootScope.currentUser = JSON.parse($window.sessionStorage["currentUser"] || '{}');

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      var requireLogin = toState.loginRequired;

      if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
        event.preventDefault();
        $state.go('login');
      }
    });

});
