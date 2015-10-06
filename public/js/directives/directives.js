var app = angular.module('myApp.directives', []);
app.directive('helloworld', function(){
	var d = {
		restrict: 'E',
		replace: true,
		scope: {
			text: "@"
		},
		template: "<h1>Hello {{text}}</h1>"
	}
	return d;
})