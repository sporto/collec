var Collec           = require('../src/collec');
var records          = require('./fixtures/records');
var expect           = require('expect.js');

describe('new', function () {
	it('creates a collection', function (){
		var col = Collec(records());
		expect(col.count()).to.be(3);
	});

	it('creates a collection without params', function (){
		var col = Collec();
		expect(col.all()).to.eql([]);
		expect(col.count()).to.be(0);
	});
});