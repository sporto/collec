// CommonJS + AMD + Global boilerplate
// https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js


(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['lodash'], function (lodash) {
			return (root.collec = factory(lodash));
		});
	} else if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like enviroments that support module.exports,
		// like Node.
		var lodash = require('lodash');
		module.exports = factory(lodash);
	} else {
		// Browser globals
		root.collec = factory(root.lodash);
	}
}(this, function (_) {

	if (_ == null) throw new Error('lodash is null');

	function collec(records) {

		var idKey = 'id';
		var collection = [];

		if (_.isArray(records)) {
			collection = records;
		}

		function addMany(records) {
			if (!_.isArray(records)) throw new Error('Not an array');
			_.map(records, replace);
		}

		function all() {
			return collection;
		}

		function count() {
			return collection.length;
		}

		function get(id) {
			if (!id) throw new Error("id required");
			return _.find(collection, function (item) {
				return item[idKey] == id;
			});
		}

		function getIndex(id) {
			var finder = {}
			finder[idKey] = id;
			return _.findIndex(collection, finder);
		}

		function replaceOrUpdate(patch, oneOrMany) {
			var processor = replaceOrUpdateOne.bind(null, patch);
			if(_.isArray(oneOrMany)) {
				_.each(oneOrMany, processor)
			} else {
				processor(oneOrMany);
			}
		}

		function replaceOrUpdateOne(patch, record) {
			var id = record[idKey];
			if (!id) throw new Error("Must provide an object with " + idKey);

			var ix = getIndex(id);

			if (ix >= 0) {
				if (patch) {
					patchIndex(ix, record);
				} else {
					collection[ix] = record;
				}
			} else {
				collection.push(record);
			}
		}

		function replace(oneOrMany) {
			replaceOrUpdate(false, oneOrMany);
		}

		function remove(oneOrManyIds) {
			if(_.isArray(oneOrManyIds)) {
				_.each(oneOrManyIds, removeOne)
			} else {
				removeOne(oneOrManyIds);
			}
		}

		function removeOne(id) {
			if (!id) throw new Error('Must provide an id');
			collection = _.reject(collection, function (item) {
				return item[idKey] == id;
			});
		}

		function update(oneOrMany) {
			replaceOrUpdate(true, oneOrMany);
		}

		// patch a record on the given index
		// given data doesn't need to have id
		function patchIndex(index, data) {
			var existing = collection[index];
			_.assign(existing, data);
		}

		function setKey(key) {
			idKey = key;
		}

		return {
			add:          replace,
			all:          all,
			count:        count,
			filter:       _.filter.bind(null, collection),
			get:          get,
			replace:      replace,
			remove:       remove,
			update:       update,
			setKey:       setKey,
		}
	}

	return collec;

}));