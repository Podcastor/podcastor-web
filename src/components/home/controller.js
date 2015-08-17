app.controller('HomeController', ['$scope', '$rootScope', 'appConfig', 'podcastorParser', function($scope, $rootScope, appConfig, podcastorParser) {
    $scope.appConfig = appConfig;
    $scope.podcasts = []

    $scope.create = function() {
        if($scope.podcast.url){
            podcastorParser($scope.podcast.url).success(function(data){
                $scope.podcasts.push(data.responseData.feed);
            });
        }
    }

}]);
