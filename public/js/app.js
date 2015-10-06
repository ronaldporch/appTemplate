var app = angular.module('myApp', ['myApp.services', 'myApp.directives', 'myApp.controllers', 'ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home',{
			url: '/',
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		})
		.state('second',{
			url: '/second',
			templateUrl: 'partials/second.html',
			controller: 'SecondController'
		})
		.state('third', {
			url: '/third',
			templateUrl: 'partials/third.html'
		})
	$urlRouterProvider.otherwise("/");
}])