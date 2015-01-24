var Collec              = require('../src/collec');
var records             = require('./fixtures/records');
var recordsStringKeys   = require('./fixtures/recordsStringKeys');
var recordsAltKeys      = require('./fixtures/recordsAltKeys');
var expect              = require('expect.js');
var col;
var colAltKey;

describe('replace', function () {

	beforeEach(function () {
		col = Collec(records());
	});

	it('replaces an existing record', function (){
		var record = {
			id: 10,
			age: 20
		}
		col.replace(record);
		expect(col.count()).to.eql(3);

		var r = col.get(10);
		expect(r).to.eql(record);
	});

	it('replaces existing records', function (){
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
		col.replace(records);
		expect(col.count()).to.eql(3);

		var r = col.get(10);
		expect(r).to.eql(records[0]);
	});

	it('adds a new record if not there', function () {
		var record = {
			id: 20,
			label: 'Kim'
		}
		col.replace(record);
		expect(col.count()).to.eql(4);
	});

	it('adds new records if not there', function () {
		var records = [
			{
				id: 20,
				label: 'Kim'
			}
		]
		col.replace(records);
		expect(col.count()).to.eql(4);
	});

	it('throws if no id given', function () {
		expect(function () {
			col.replace({label: 'Zack'});
		}).to.throwError();
	});

	it('throws if no id given', function () {
		var records = [
			{label: 'Zack'}
		];
		expect(function () {
			col.replace(records);
		}).to.throwError();
	});

	it('replaces an existing record with an alt key', function (){
		var colAltKey = Collec(recordsAltKeys());
		colAltKey.setKey('_id');

		var record = {
			_id: 'b',
			age: 20
		}
		colAltKey.replace(record);
		expect(colAltKey.count()).to.eql(3);

		var r = colAltKey.get('b');
		expect(r).to.eql(record);
	});

	it('replaces existings records with an alt keys', function (){
		var colAltKey = Collec(recordsAltKeys());
		colAltKey.setKey('_id');

		var records = [
			{
				_id: 'b',
				age: 20
			},
			{
				_id: 'c',
				age: 40
			}
		]

		colAltKey.replace(records);
		expect(colAltKey.count()).to.eql(3);

		var r = colAltKey.get('b');
		expect(r).to.eql(records[0]);
	});

});