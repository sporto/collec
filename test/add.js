var Collec              = require('../src/collec');
var records             = require('./fixtures/records');
var recordsStringKeys   = require('./fixtures/recordsStringKeys');
var recordsAltKeys      = require('./fixtures/recordsAltKeys');
var expect              = require('expect.js');
var col1;

describe('add', function () {

	beforeEach(function () {
		col1 = Collec(records());
	});

	it('adds a new record', function (){
		var record = {
			id: 20,
			label: 'Zack'
		}
		col1.add(record);
		expect(col1.count()).to.eql(4);
	});

	it('adds new records', function (){
		var records = [
			{
				id: 20,
				label: 'Zack'
			},
			{
				id: 21,
				label: 'Kim'
			}
		]
		col1.add(records);
		expect(col1.count()).to.eql(5);
	});

	it('replaces an existing record', function () {
		var record = {
			id: 10,
			label: 'Zack'
		}
		col1.add(record);
		expect(col1.count()).to.eql(3);

		var r = col1.get(10);
		expect(r).to.eql(record);	
	});

	it('replaces existing records', function () {
		var records = [
			{
				id: 10,
				label: 'Zack'
			}
		]
		col1.add(records);
		expect(col1.count()).to.eql(3);

		var r = col1.get(10);
		expect(r).to.eql(records[0]);
	});

	it('throws if no id given', function () {
		expect(function () {
			col1.add({label: 'Zack'});
		}).to.throwError();
	});

	it('throws if no id given', function () {
		var records = [
			{
				label: 'Zack'
			}
		]

		expect(function () {
			col1.add(records);
		}).to.throwError();
	});

});