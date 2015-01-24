var Collec              = require('../src/collec');
var records             = require('./fixtures/records');
var recordsStringKeys   = require('./fixtures/recordsStringKeys');
var recordsAltKeys      = require('./fixtures/recordsAltKeys');
var expect              = require('expect.js');
var col;
var colAltKey;

describe('update', function () {

	beforeEach(function () {
		col = Collec(records());
	});

	it('updates an existing record', function (){
		var record = {
			id: 10,
			age: 20
		}
		col.update(record);
		expect(col.count()).to.eql(3);

		var r = col.get(10);
		var expected = {
			id: 10,
			age: 20,
			label: 'Sam'
		}

		expect(r).to.eql(expected);
	});

	it('updates existing records', function (){
		var records = [
			{
				id: 10,
				age: 20
			},
			{
				id: 11,
				age: 40
			}
		]
		col.update(records);
		expect(col.count()).to.eql(3);

		var r = col.get(10);
		var expected = {
			id: 10,
			age: 20,
			label: 'Sam'
		}

		expect(r).to.eql(expected);
	});

	it('adds a new record if not there', function () {
		var record = {
			id: 20,
			label: 'Kim'
		}
		col.update(record);
		expect(col.count()).to.eql(4);
	});

	it('adds new records if not there', function () {
		var records = [
			{
				id: 20,
				label: 'Kim'
			},
			{
				id: 21,
				label: 'Ted'
			}
		]
		col.update(records);
		expect(col.count()).to.eql(5);
	});

	it('throws if no id given', function () {
		var record = {label: 'Zack'};
		expect(function () {
			col.update(record);
		}).to.throwError();
	});

	it('throws if no id given', function () {
		var records = [{label: 'Zack'}];
		expect(function () {
			col.update(records);
		}).to.throwError();
	});

	it('updates an existing record with an alt key', function (){
		var colAltKey = Collec(recordsAltKeys());
		colAltKey.setKey('_id');

		var record = {
			_id: 'b',
			age: 20
		}

		colAltKey.update(record);
		expect(colAltKey.count()).to.eql(3);

		var r = colAltKey.get('b');
		var expected = {
			_id: 'b',
			age: 20,
			label: 'Sam'
		}
		expect(r).to.eql(expected);
	});

	// it('returns the record with alt keys', function (){
	// 	var col = Collec(recordsAltKeys());
	// 	col.setKey('_id');
	// 	var record = col.get('b');
	// 	expect(record).to.eql({_id: 'b', label: 'Sam'});
	// });
});