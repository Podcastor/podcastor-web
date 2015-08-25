app.factory('podcastorSearch', ['$http', '$rootScope', '$state', 'appConfig',
    function($http, $rootScope, $state, appConfig){
        var searchPodcastBackend = function(link){
            return $http({
                url: appConfig.baseApi + '/podcasts/search/',
                method: 'GET',
                params: { link: link }
            }).then(function(response){
                console.log(response);
                return response;
            });
        }

        return searchPodcastBackend;
}]);
