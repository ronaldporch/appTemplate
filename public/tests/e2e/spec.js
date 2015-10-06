describe('Home Page', function(){
	it('should be /', function(){
		browser.get('http://localhost:3000');
		var url = browser.getLocationAbsUrl();
		expect(url).toMatch('/');
	})
})