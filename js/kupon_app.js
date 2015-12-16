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
	
	if (angular.isUndefined($location.path()) || $location.path()=='/home' || $location.path()=='/' || $location.path().trim()=='') {
		$location.path("/home");
	}
	
	

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
			
			
			$scope.popularDealList = respObj;
			
		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});
	
	
	/*Home Best price deals*/
	$http({
	    url: 'data/home-beat-rating.json',
	    method	: 'GET',
	    headers	: {'Content-Type': 'application/json'},
        dataType: 'json'
	}).success(function(respObj) {
		if (!angular.isUndefined(respObj)) {
			
			
			$scope.bestPriceDealList = respObj;
			
		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});
	
	
	/*Home latest deals*/
	$http({
	    url: 'data/home-latest-deals.json',
	    method	: 'GET',
	    headers	: {'Content-Type': 'application/json'},
        dataType: 'json'
	}).success(function(respObj) {
		if (!angular.isUndefined(respObj)) {
			
			
			$scope.LatestDealList = respObj;
			
		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});	
	
	
	/*Popular tags*/
	$http({
	    url: 'data/home-popular-tags.json',
	    method	: 'GET',
	    headers	: {'Content-Type': 'application/json'},
        dataType: 'json'
	}).success(function(respObj) {
		if (!angular.isUndefined(respObj)) {
			
			
			$scope.popularTagList = respObj;
			readyCall();
		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});
	
	
	
	
}]);


KuponApp.controller("Home2Controller", ['$scope',  '$location', '$routeParams', '$filter','$http', '$location','kuponDynamConst','$rootScope',
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
	
	/*Home home-popular deals*/
	$http({
	   url: 'data/home2-popular-deals.json',
	   method	: 'GET',
	   headers	: {'Content-Type': 'application/json'},
	   dataType: 'json'
	}).success(function(respObj) {
		if (!angular.isUndefined(respObj)) {
			
			
			$scope.popularDealList = respObj;
			
		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});


	/*Home Best price deals*/
	$http({
	   url: 'data/home-beat-rating.json',
	   method	: 'GET',
	   headers	: {'Content-Type': 'application/json'},
	   dataType: 'json'
	}).success(function(respObj) {
		if (!angular.isUndefined(respObj)) {
			
			
			$scope.bestPriceDealList = respObj;
			
		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});
	
	
	/*Home latest deals*/
	$http({
	   url: 'data/home-latest-deals.json',
	   method	: 'GET',
	   headers	: {'Content-Type': 'application/json'},
	   dataType: 'json'
	}).success(function(respObj) {
		if (!angular.isUndefined(respObj)) {
			
			
			$scope.LatestDealList = respObj;
			
		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});	
	
	
	/*Popular tags*/
	$http({
	   url: 'data/home-popular-tags.json',
	   method	: 'GET',
	   headers	: {'Content-Type': 'application/json'},
	   dataType: 'json'
	}).success(function(respObj) {
		if (!angular.isUndefined(respObj)) {
			
			
			$scope.popularTagList = respObj;
			readyCall();
		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});
	



}]);



KuponApp.controller("resultController", ['$scope',  '$location', '$routeParams', '$filter','$http', '$location','kuponDynamConst','$rootScope',
                                   function ($scope,  $location, $routeParams, $filter,$http, $location, kuponDynamConst,  $rootScope) {
	
	/*Popular tags*/
	$http({
	   url: 'data/search-result.json',
	   method	: 'GET',
	   headers	: {'Content-Type': 'application/json'},
	   dataType: 'json'
	}).success(function(respObj) {
		if (!angular.isUndefined(respObj)) {
			
			
			$scope.searchList = respObj;
			
		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});
	

	/*Home home-popular deals*/
	$http({
	   url: 'data/home2-popular-deals.json',
	   method	: 'GET',
	   headers	: {'Content-Type': 'application/json'},
	   dataType: 'json'
	}).success(function(respObj) {
		if (!angular.isUndefined(respObj)) {
			
			
			$scope.popularDealList = respObj;
			
		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});


	/*Home Best price deals*/
	$http({
	   url: 'data/home-beat-rating.json',
	   method	: 'GET',
	   headers	: {'Content-Type': 'application/json'},
	   dataType: 'json'
	}).success(function(respObj) {
		if (!angular.isUndefined(respObj)) {
			
			
			$scope.bestPriceDealList = respObj;
			
		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});
	
	
	/*Home latest deals*/
	$http({
	   url: 'data/home-latest-deals.json',
	   method	: 'GET',
	   headers	: {'Content-Type': 'application/json'},
	   dataType: 'json'
	}).success(function(respObj) {
		if (!angular.isUndefined(respObj)) {
			
			
			$scope.LatestDealList = respObj;
			
		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});	
	
	
	/*Popular tags*/
	$http({
	   url: 'data/home-popular-tags.json',
	   method	: 'GET',
	   headers	: {'Content-Type': 'application/json'},
	   dataType: 'json'
	}).success(function(respObj) {
		if (!angular.isUndefined(respObj)) {
			
			
			$scope.popularTagList = respObj;
			readyCall();
		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});
	
}]);


KuponApp.controller("cartController", ['$scope',  '$location', '$routeParams', '$filter','$http', '$location','kuponDynamConst','$rootScope',
                                            function ($scope,  $location, $routeParams, $filter,$http, $location, kuponDynamConst,  $rootScope) {
         	
         	

}]);


KuponApp.controller("faqController", ['$scope',  '$location', '$routeParams', '$filter','$http', '$location','kuponDynamConst','$rootScope',
                                       function ($scope,  $location, $routeParams, $filter,$http, $location, kuponDynamConst,  $rootScope) {

	/*Popular tags*/
	$http({
	   url: 'data/frequently-asked-questions.json',
	   method	: 'GET',
	   headers	: {'Content-Type': 'application/json'},
	   dataType: 'json'
	}).success(function(respObj) {
		if (!angular.isUndefined(respObj)) {
			
			
			$scope.frqAskedQatnList = respObj;

		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});
	
    	

}]);




KuponApp.controller("Details2Controller", ['$scope',  '$location', '$routeParams', '$filter','$http', '$location','kuponDynamConst','$rootScope','$interval',
                                           function ($scope,  $location, $routeParams, $filter,$http, $location, kuponDynamConst,  $rootScope, $interval) {
    
	$http({
	    url: 'data/details2-slider2.json',
	    method	: 'GET',
	    headers	: {'Content-Type': 'application/json'},
        dataType: 'json'
	}).success(function(respObj) {
		if (!angular.isUndefined(respObj)) {
			
			$scope.slider2List = respObj;
			var timer = $interval(function() {
				readyCall();	
			}, 10);
		} else {
			alert("Ajax Error: "+ respObj);
		}
	}).error(function(respObj) {
		alert("Error: "+ respObj);
	});
    	
    	

}]);

KuponApp.controller("DetailsController", ['$scope',  '$location', '$routeParams', '$filter','$http', '$location','kuponDynamConst','$rootScope','$interval',
                                               function ($scope,  $location, $routeParams, $filter,$http, $location, kuponDynamConst,  $rootScope, $interval) {

        	$http({
        	    url: 'data/details2-slider2.json',
        	    method	: 'GET',
        	    headers	: {'Content-Type': 'application/json'},
                dataType: 'json'
        	}).success(function(respObj) {
        		if (!angular.isUndefined(respObj)) {
        			
        			$scope.slider2List = respObj;
        			var timer = $interval(function() {
        				readyCall();	
        			}, 10);
        			
        			
        		} else {
        			alert("Ajax Error: "+ respObj);
        		}
        	}).error(function(respObj) {
        		alert("Error: "+ respObj);
        	});

}]);

KuponApp.controller("checkoutController", ['$scope',  '$location', '$routeParams', '$filter','$http', '$location','kuponDynamConst','$rootScope','$interval',
                                          function ($scope,  $location, $routeParams, $filter,$http, $location, kuponDynamConst,  $rootScope, $interval) {

}]);	


KuponApp.controller("contactController", ['$scope',  '$location', '$routeParams', '$filter','$http', '$location','kuponDynamConst','$rootScope','$interval',
                                          function ($scope,  $location, $routeParams, $filter,$http, $location, kuponDynamConst,  $rootScope, $interval) {

}]);	

KuponApp.controller("sumbitController", ['$scope',  '$location', '$routeParams', '$filter','$http', '$location','kuponDynamConst','$rootScope','$interval',
                                         function ($scope,  $location, $routeParams, $filter,$http, $location, kuponDynamConst,  $rootScope, $interval) {

}]);	

KuponApp.controller("registrationController", ['$scope',  '$location', '$routeParams', '$filter','$http', '$location','kuponDynamConst','$rootScope','$interval',
                                               function ($scope,  $location, $routeParams, $filter,$http, $location, kuponDynamConst,  $rootScope, $interval) {

}]);	

KuponApp.controller("featuresController", ['$scope',  '$location', '$routeParams', '$filter','$http', '$location','kuponDynamConst','$rootScope','$interval',
                                           function ($scope,  $location, $routeParams, $filter,$http, $location, kuponDynamConst,  $rootScope, $interval) {

}]);	