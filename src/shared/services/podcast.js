app.factory('podcasts', ['$rootScope', '$http', 'appConfig', function($rootScope, $http, appConfig) {

    function factory() {

        var _get = function(params){
            return $http({
                url: appConfig.baseApi + '/podcasts/',
                method: 'GET',
                params: params
            }).then(function(response){
                return response.data;
            });
        }

        var _createFromFeed = function(data){
            return $http.post(appConfig.baseApi + '/podcasts/create-from-feed/', data)
                .then)function(response){
                    return response.data;
                }
        }

        var factory = {
            podcasts : {
                get: _get,
                createFromFeed: _createFromFeed,
            }
        }

        return factory;
    }

    return factory;

}]);
