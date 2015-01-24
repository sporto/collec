var Collec              = require('../src/collec');
var records             = require('./fixtures/records');
var recordsStringKeys   = require('./fixtures/recordsStringKeys');
var recordsAltKeys      = require('./fixtures/recordsAltKeys');
var expect              = require('expect.js');

describe('getIndex', function () {

	beforeEach(function () {
		// col1 = Collec(records());
	});

	it('returns the index', function (){
		var col = Collec(records());
		var ix = col.getIndex(10);
		expect(ix).to.be(1);
	});

	it('returns the index for strings', function (){
		var col = Collec(recordsStringKeys());
		var ix = col.getIndex('b');
		expect(ix).to.be(1);
	});

	it('returns the alt keys', function (){
		var col = Collec(recordsAltKeys());
		col.setKey('_id');
		var ix = col.getIndex('b');
		expect(ix).to.be(1);
	});
});