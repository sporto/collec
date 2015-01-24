var Collec              = require('../src/collec');
var records             = require('./fixtures/records');
var recordsStringKeys   = require('./fixtures/recordsStringKeys');
var recordsAltKeys      = require('./fixtures/recordsAltKeys');
var expect              = require('expect.js');

describe('get', function () {

	beforeEach(function () {
		// col1 = Collec(records());
	});

	it('returns the record', function (){
		var col = Collec(records());
		var record = col.get(10);
		expect(record).to.eql({id: 10, label: 'Sam'});
	});

	it('returns the record with strings keys', function (){
		var col = Collec(recordsStringKeys());
		var record = col.get('b');
		expect(record).to.eql({id: 'b', label: 'Sam'});
	});

	it('returns the record with alt keys', function (){
		var col = Collec(recordsAltKeys());
		col.setKey('_id');
		var record = col.get('b');
		expect(record).to.eql({_id: 'b', label: 'Sam'});
	});
});