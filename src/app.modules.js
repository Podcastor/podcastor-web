/**
 * Load modules for application
 */
var app = angular.module('podcastor', ['ui.router']);

// set our API host
app.constant('appConfig', {
    title: 'Podcastor',
    googleFeed: '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=',
});

// start up
app.run(function($rootScope, appConfig){
    $rootScope.appConfig = appConfig;
});
