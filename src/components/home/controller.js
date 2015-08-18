app.controller('HomeController', ['$scope', '$rootScope', 'appConfig', function($scope, $rootScope, appConfig) {
    $scope.appConfig = appConfig;
    $scope.podcasts = []
}]);
