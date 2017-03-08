angular.module("myApp", [
    'ngRoute',
    'ngFileUpload'
])
.constant('urls', {
    BASE: 'sdfsd',
})
.config(['$routeProvider', '$httpProvider', 'urls', function ($routeProvider, $httpProvider, urls) {
    $routeProvider
    .when('/', {
        controller: 'usersCtrl',
        templateUrl: '/templates/users/index.html'
    })
    .when('/users/add', {
        controller: 'usersCtrl',
        templateUrl: '/templates/users/add.html'
    })
    .otherwise({
        redirectTo: '/'
    });


}]);
