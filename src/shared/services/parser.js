app.factory('podcastorParser', ['$http', '$rootScope', 'appConfig', function($http, $rootScope, appConfig){
    return function(url){
        var parseFeed = function(url){
            return jQuery.getFeed({
                url: url,
                success: function(data) {
                    console.log(data);
                }
            });
        }

        return parseFeed(url);
    }
}]);
