app.factory('podcastorAuth', ['$http', '$rootScope', '$state', '$window', 'appConfig',
    function($http, $rootScope, $state, $window, appConfig){
        var backendAuthentication = function(data){
            $http.post(appConfig.baseApi + '/accounts/login/', data).
                success(function(data){
                    $rootScope.currentUser = data;
                    $window.sessionStorage["currentUser"] = JSON.stringify(data);
                    $state.go("home");
                });
        }

        return backendAuthentication;
}]);
