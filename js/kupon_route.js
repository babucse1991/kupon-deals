'use strict';

//Declare app level module which depends on filters, and services
KuponApp.config(['$routeProvider', function ($routeProvider) {
	
	$routeProvider.when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'HomeController'
    });

	$routeProvider.when('/home2', {
        templateUrl: 'pages/home2.html',
        controller: 'Home2Controller'
    });

	$routeProvider.when('/results', {
        templateUrl: 'pages/results.html',
        controller: 'resultController'
    });

	$routeProvider.when('/cart', {
        templateUrl: 'pages/cart.html',
        controller: 'cartController'
    });

	$routeProvider.when('/faq', {
        templateUrl: 'pages/faq.html',
        controller: 'faqController'
    });
	
	$routeProvider.when('/details_2', {
        templateUrl: 'pages/details_2.html',
        controller: 'Details2Controller'
    });
	
	$routeProvider.when('/details', {
        templateUrl: 'pages/details.html',
        controller: 'DetailsController'
    });

	$routeProvider.when('/checkout', {
        templateUrl: 'pages/checkout.html',
        controller: 'checkoutController'
    });
	
	$routeProvider.when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'contactController'
    });

	$routeProvider.when('/sumbit', {
        templateUrl: 'pages/sumbit.html',
        controller: 'sumbitController'
    });

	$routeProvider.when('/registration', {
        templateUrl: 'pages/registration.html',
        controller: 'registrationController'
    });
	
	$routeProvider.when('/features', {
        templateUrl: 'pages/features.html',
        controller: 'featuresController'
    });
	
    $routeProvider.otherwise({
        redirectTo: '/',
        controller: ''
    });
}]);
