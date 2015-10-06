var app = angular.module('myApp.controllers', []);
app.controller('HomeController', ['$scope', 'SimpleFunc', function($scope, SimpleFunc){
	$scope.name = "";
}])
app.controller('SecondController', ['$scope', 'SimpleFunc', function($scope, SimpleFunc){
	$scope.add = SimpleFunc.add;
}])