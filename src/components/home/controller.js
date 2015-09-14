app.controller('HomeController', ['$scope', '$rootScope', 'appConfig', 'podcasts', function($scope, $rootScope, appConfig, podcasts) {
    $scope.appConfig = appConfig;

    $scope.searchPodcasts = function() {
        podcasts.get($scope.params).
            then(function(response) {
                $scope.podcasts = response.results;
            });
    }

    $scope.createFromFeed = function() {
        podcasts.createFromFeed($scope.feed).
            then(function(response){
                console.log(response);
            })
    }
}]);
