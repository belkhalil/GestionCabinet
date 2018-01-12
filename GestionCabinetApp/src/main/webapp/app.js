'use strict';
// create the module and name it App
var app = angular.module('app', [ 'ngRoute' ]);
app.config(function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl : 'index.html',
	// controller:'MainController'
	});
	$routeProvider.when('/users', {
		templateUrl : 'views/gestionUser.html',
	});
	// end of new class
	// .otherwise({
	// redirectTo:'/'
	// });
});
