var Collec           = require('../src/collec');
var records          = require('./fixtures/records');
var expect           = require('expect.js');

describe('new', function () {
	it('creates a collection', function (){
		var col = Collec(records());
		expect(col.count()).to.be(3);
	});
});