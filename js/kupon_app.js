var KuponApp = angular.module('KuponApp',['ui.bootstrap','ngRoute']);

KuponApp.constant('kupGlobalConstants', {
	'ACTIVE_FLAG_YES'	:	'Y',
	'ACTIVE_FLAG_NO'	:	'N',
});

KuponApp.value("kuponDynamConst", {
	volUserIdentity:'',
});

KuponApp.controller("kuponMainController", ['$scope',  '$location', '$routeParams', '$filter','$http', '$location','kuponDynamConst','$rootScope',
                                   function ($scope,  $location, $routeParams, $filter,$http, $location, kuponDynamConst,  $rootScope) {
	$scope.mainheader="pages/default-header.html";
	$scope.mainfooter="pages/default-footer.html";
	$location.path("/home");
	

}]);

KuponApp.controller("HomeController", ['$scope',  '$location', '$routeParams', '$filter','$http', '$location','kuponDynamConst','$rootScope',
                                            function ($scope,  $location, $routeParams, $filter,$http, $location, kuponDynamConst,  $rootScope) {
	
	/*Home page slider*/
	$http({
	    url: 'data/home-slider.json',
	    method	: 'GET',
	    headers	: {'Content-Type': 'application/json'},
        dataType: 'json'
	}).success(function(respObj) {
		if (!angular.isUndefined(respObj)) {
			
			$scope.sliderList = respObj;
			
		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});
	
	/*Home feature deals*/
	$http({
	    url: 'data/home-feature-deals.json',
	    method	: 'GET',
	    headers	: {'Content-Type': 'application/json'},
        dataType: 'json'
	}).success(function(respObj) {
		if (!angular.isUndefined(respObj)) {
			console.log("respObj :: " + JSON.stringify(respObj));
			
			$scope.featureDealList = respObj;
			
		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});
	

	/*Home home-popular deals*/
	$http({
	    url: 'data/home-popular-deals.json',
	    method	: 'GET',
	    headers	: {'Content-Type': 'application/json'},
        dataType: 'json'
	}).success(function(respObj) {
		if (!angular.isUndefined(respObj)) {
			console.log("respObj :: " + JSON.stringify(respObj));
			
			$scope.popularDealList = respObj;
			
		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});
	
	
	
	
	
}]);