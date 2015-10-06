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