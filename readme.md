Collec
======

Simple JavaScript collections for database models

## Install

```
npm install collec --save
```

### Browser global

This library requires lodash.

```
<script src='scripts/lodash.js'></script>
<script src='scripts/collec.js'></script>
```

## API

### Id keys

All items in the collection must have an id key e.g. 'id'. By default Collect assumes 'id'. See `setKey` below to change this.

### new

```js
var records = [{id: 1, label: 'Sam'}, {id: 2, label: 'Tess'}];
var col = Collec(records);
```

### add

Add items to the collection.
Takes one item or an array of items.

```js
col.add(oneItem)
col.add(manyItems)
```

### all

Get all items from the collection.

```js
var items = col.all()
```

### count

Get the size of the collection

```
col.count()
```

### filter

Returns a filtered collection using a filtering function

```
var items = col.filter(function (item) {
	return item.age > 20;
})
```

### get 

Get one item by id

```js
var item = col.get(22)
```

### getIndex

Get the index of an item using the id

```js
var ix = col.getIndex(22)
```

### replace

Replaces one item or many.
This discards any previous data from the replace items.

```js
col.replace(oneItem)
col.replace(manyItems)
```

### remove

Remove one item or many using the id.

```js
col.remove(id)
col.remove(ids)
```

### update

Updates one item or many.
This merges the given data with the existing one.

```js
col.update(oneItem)
col.update(manyItems)
```

### setKey

Set the key used for finding items e.g. '_id'.
By default 'id' is assumed.

```js
col.setKey('_id')
```

## Test

```
npm test
```

## Build

```
gulp
```


