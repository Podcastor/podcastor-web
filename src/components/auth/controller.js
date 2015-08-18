app.controller('LoginController', ['$scope', '$rootScope', 'appConfig', 'podcastorAuth', function($scope, $rootScope, appConfig, podcastorAuth) {
    $scope.appConfig = appConfig;

    $scope.login = function(){
        podcastorAuth(this.authentication);
    }
}]);
