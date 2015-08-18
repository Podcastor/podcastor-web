/**
 * Load states for application
 * more info on UI-Router states can be found at
 */
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    // any unknown URLS go to 404
    $urlRouterProvider.otherwise('/404');
    // no route goes to index
    $urlRouterProvider.when('', '/');
    // use a state provider for routing

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'src/components/home/views/home.html',
            controller: 'HomeController',
            controllerAs: 'ctrl',
            loginRequired: true
        })
        .state('login', {
            url: '/login',
            templateUrl: 'src/components/auth/views/login.html',
            controller: 'LoginController',
            controlerAs: 'ctrl'
        })
        .state('404', {
            url: '/404',
            templateUrl: 'app/shared/views/404.html'
        })
}]);
