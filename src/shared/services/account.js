app.factory('accountApp', ['$rootScope', '$window', '$http', 'appConfig', function($rootScope, $window, $http, appConfig) {

    function factory() {

        var _bookmarkPodcasts = function(podcastIds){
            var data = {
                bookmarked_podcasts: podcastIds
            }

            return $http.post(appConfig.baseApi + '/accounts/bookmarked-podcasts/', data).
                then(function(response) {
                    return response.data;
                });
        }

        var _bookmarkedPodcasts = function(params) {
            return $http({
                url: appConfig.baseApi + '/accounts/bookmarked-podcasts/',
                method: 'GET',
                params: params
            }).then(function(response){
                return response.data;
            });
        }

        var _get = function() {
            return $http.get(appConfig.baseApi + '/accounts/')
                .then(function(response) {
                    return response.data;
                });
        }

        var _updateCurrentUser = function() {
            factory.get().then(function(response) {
                $rootScope.currentUser = response;
                $window.sessionStorage["currentUser"] = JSON.stringify(response);
            });
        }

        var factory = {
            get: _get,
            updateCurrentUser: _updateCurrentUser,
            bookmarkPodcasts: _bookmarkPodcasts,
            bookmarkedPodcasts: _bookmarkedPodcasts
        }

        return factory;
    }

    return factory;

}]);
