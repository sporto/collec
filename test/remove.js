var Collec              = require('../src/collec');
var records             = require('./fixtures/records');
var recordsStringKeys   = require('./fixtures/recordsStringKeys');
var recordsAltKeys      = require('./fixtures/recordsAltKeys');
var expect              = require('expect.js');
var col;
var colAltKey;

describe('remove', function () {

	beforeEach(function () {
		col = Collec(records());
	});

	it('removes an existing record', function (){
		col.remove(10);
		expect(col.count()).to.eql(2);
	});

	it('removes existing records', function (){
		col.remove([10, 11]);
		expect(col.count()).to.eql(1);
	});


	it('removes an existing record with an alt key', function (){
		var colAltKey = Collec(recordsAltKeys());
		colAltKey.setKey('_id');

		colAltKey.remove('b');
		expect(colAltKey.count()).to.eql(2);
	});

});