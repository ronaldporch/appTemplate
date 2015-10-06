var app = angular.module('myApp.services', []);
app.factory('SimpleFunc', [function(){
	var o = {
		add: function(n, m){
			return parseInt(n) + parseInt(m);
		}
	}
	return o;
}])