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
app.run(function($rootScope, $location, $state, $window, $http, appConfig, podcastorSearch){
    $rootScope.appConfig = appConfig;
    $rootScope.currentUser = undefined;
    $rootScope.podcasts = [];

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
        var requireLogin = toState.loginRequired;

        if($window.sessionStorage["currentUser"] !== undefined){
            $rootScope.currentUser = JSON.parse($window.sessionStorage["currentUser"]);
            $http.defaults.headers.common['Authorization'] = 'Token ' + $rootScope.currentUser.auth_token.key;
        }

        if (requireLogin && $rootScope.currentUser === undefined) {
          event.preventDefault();
          $state.go('login');
        }else if ($rootScope.currentUser !== undefined && toState.url == "/login") {
          event.preventDefault();
          $state.go('home');
        }
    });

    $rootScope.searchPodcast = function(){
        podcastorSearch(this.podcast.url).then(function(response) {
            console.log('root', response);
            $rootScope.podcasts = (response.data.results);
        });
    };

});
