/**
 * Load modules for application
 */
var app = angular.module('podcastor', ['ui.router']);

// set our API host
app.constant('appConfig', {
    title: 'Podcastor'
});

// start up
app.run(function($rootScope, appConfig){
    $rootScope.appConfig = appConfig;
});
