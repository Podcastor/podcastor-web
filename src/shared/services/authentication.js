app.factory('podcastorAuth', ['$http', '$rootScope', '$state', '$window', 'appConfig',
    function($http, $rootScope, $state, $window, appConfig){
        var backendAuthentication = function(data){
            return $http.post(appConfig.baseApi + '/accounts/login/', data).
                then(function(response){
                    if(response.status !== 200) { return; }

                    $rootScope.currentUser = response.data;
                    $window.sessionStorage["currentUser"] = JSON.stringify(response.data);

                    $state.go('home');
                });
        }

        return backendAuthentication;
}]);
