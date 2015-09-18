app.factory('podcastsApp', ['$rootScope', '$http', 'appConfig', function($rootScope, $http, appConfig) {

    function factory() {

        var _deserialize = function(podcast) {
            for (var i=0; i<$rootScope.currentUser.bookmarked_podcasts.length; i++){
                podcast.bookmarked = podcast.id == $rootScope.currentUser.bookmarked_podcasts[i] ? true : false;
            }

            return podcast;
        }

        var _get = function(params){
            return $http({
                url: appConfig.baseApi + '/podcasts/',
                method: 'GET',
                params: params
            }).then(function(response){
                results = [];
                for (var i=0; i<response.data.results.length; i++){
                    results.push(_deserialize(response.data.results[i]));
                }

                return response.data;
            });
        }

        var _createFromFeed = function(data){
            return $http.post(appConfig.baseApi + '/podcasts/create-from-feed/', data)
                .then(function(response){
                    return response.data;
                });
        }

        var factory = {
            get: _get,
            createFromFeed: _createFromFeed
        }

        return factory;
    }

    return factory;

}]);
