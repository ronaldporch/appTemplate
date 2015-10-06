# App Template

Node.js + AngularJS Application Template with Testing

## Testing

### Installing Karma/Jasmine
```
npm install -g karma
karma init test/karma.conf.js

npm install -g --save karma-chrome-launcher 
npm install -g --save karma-firefox-launcher
npm install -g --save karma-script-launcher
npm install -g --save karma-jasmine
```

### Sample Spec

```javascript
describe('Sample Suite', function(){
	var scope, createController;
	beforeEach(module('myApp.controllers', 'myApp.services'));
	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope.$new();
		createController = function(){
			//Controller 'MyController' has $scope function 'reverse'
			return $controller('MyController', {$scope: scope})
		}
	}))
	it('should return a passing test', function(){
		var ctrl = createController();
		expect($scope.reverse('foo')).toBe('oof');
	})
})
```

### Running Karma

```
//In test directory
karma start karma.conf.js
```

More information on Karma can be found [here](http://karma-runner.github.io/0.13/index.html "Karma").

### Installing Protractor

```
npm install -g protractor

//Selenium Server
webdriver-manager update
webdriver-manager start
```

### Config File

```javascript
exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/spec.js']
}
```

### Sample Spec

```javascript
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://localhost:3000/');

    expect(browser.getTitle()).toEqual('Claimatic');
  });
});
```

### Running Protractor

```
//In test directory
protractor conf.js
```

More information on Protractor can be found [here](https://angular.github.io/protractor "Protractor").

### Installing Mocha/Chai/SuperTest

```
npm install -g mocha
npm install --save chai
npm install --save-dev supertest
```

By default, mocha looks for tests in the **test** folder in root.

### Sample Mocha/Chai Spec

```javascript
var expect = require('chai').expect;
var request = require('supertest');
var simpleFunc = require('../lib/test.js');

describe('simpleFunc', function(){
	it("should add 2 + 2", function(){
		expect(simpleFunc.add(2, 2)).to.equal(4);
	})
	it("should show full name", function(){
		expect(simpleFunc.concat("Ronald", "Porch")).to.equal("Ronald Porch");
	})
})
describe('User', function(){
	it('should return a list of users', function(done){
		request("http://localhost:3000")
			.get('/users/stuff')
      		.set('Accept', 'application/json')
      		.expect('Content-Type', /json/)
      		.expect(200, {
      			users: [{name:"dada5714"},{name:"detempton"}]
      		}, done)
	})
})
```

### Matching Code

```javasript
//lib/test.js
var test = {
	add: function(a, b){
		return a + b;
	},
	concat: function(f, l){
		return f + " " + l;
	}
}
module.exports = test;
```

```javascript
//routes/users.js
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/stuff', function(req, res, next){
	res.status(200).json({users:[{name: "dada5714"},{name: "detempton"}]})
})

module.exports = router;

```

### Running Mocha Tests

```
//Root Folder
mocha
```

More Information on Mocha can be found [here](https://mochajs.org/ "Mocha").

More Information on SuperTest can be found [here](https://github.com/visionmedia/supertest "SuperTest").