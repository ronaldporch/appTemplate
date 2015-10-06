describe('passing suite', function(){
	it('should provide passing spec', function(){
		expect(2).toBe(2);
	})
})
describe('appTest', function(){
	var $scope, createController;
	beforeEach(module('myApp.controllers', 'myApp.services'));
	beforeEach(inject(function($rootScope, $controller){
		$scope = $rootScope.$new();
		createController = function(){
			return $controller('SecondController', {$scope: $scope});
		}
	}))
	it('should add two numbers', function(){
		var controller = createController(); 
		expect($scope.add(2, 4)).toBe(6);
	})
})
describe('appTest2', function(){
	beforeEach(module('myApp.services'));
	it('should add two numbers', inject(function(SimpleFunc){
		expect(SimpleFunc.add(3,5)).toBe(8);
		expect(SimpleFunc.add(5,"Banana")).toBeNaN();
	}))
})