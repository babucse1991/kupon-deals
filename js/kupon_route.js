'use strict';

//Declare app level module which depends on filters, and services
KuponApp.config(['$routeProvider', function ($routeProvider) {
	
	$routeProvider.when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'HomeController'
    });

    $routeProvider.otherwise({
        redirectTo: '/',
        controller: ''
    });
}]);
