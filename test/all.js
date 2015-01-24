var Collec              = require('../src/collec');
var records             = require('./fixtures/records');
// var recordsStringKeys   = require('./fixtures/recordsStringKeys');
// var recordsAltKeys      = require('./fixtures/recordsAltKeys');
var expect              = require('expect.js');

describe('all', function () {

	beforeEach(function () {
		// col1 = Collec(records());
	});

	it('returns the records', function (){
		var col = Collec(records());
		var record = col.all();
		expect(record.length).to.eql(3);
	});

});