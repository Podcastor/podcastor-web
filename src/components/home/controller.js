app.controller('HomeController', ['$scope', '$rootScope', 'appConfig', 'podcastsApp', 'accountApp', function($scope, $rootScope, appConfig, podcastsApp, accountApp) {
    $scope.appConfig = appConfig;
    $scope.feed = {};
    $scope.params = {};

    $scope.searchPodcasts = function() {
        podcastsApp().get($scope.params).
            then(function(response) {
                $scope.podcasts = response.results;
            });
    }

    $scope.createFromFeed = function() {
        podcastsApp().createFromFeed($scope.feed).
            then(function(response) {

            });
    }

    $scope.bookmarkPodcast = function(podcast) {
        accountApp().bookmarkPodcasts([podcast.id]).
            then(function(response) {
                podcast.bookmarked = true;
                accountApp().updateCurrentUser();
            });

    }

}]);
