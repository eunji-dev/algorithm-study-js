// object로 hashTable 구현
const table = {};

table['key'] = 100;
table['key2'] = 'hello';

console.log(table['key']); // 100

table['key'] = 123;
console.log(table['key']); // 123

delete table['key'];
console.log(table['key']); // undefined

// map으로 hashTable 구현
const mapTable = new Map();

mapTable.set('key', 100);
mapTable.set('key2', 'hi');

console.log(mapTable['key']); // undefined
console.log(mapTable.get('key')); // 100
console.log(mapTable.keys()); // { 'key', 'key2 }
console.log(mapTable.values()); // { '100', 'hi }

mapTable.clear();
console.log(mapTable.values()); // {}

// set으로 hashTable 구현
const setTable = new Set();

setTable.add('key', 100);
setTable.add('key2', 'hi');

console.log(setTable.has('key')); // true
console.log(setTable.has('wrongKey')); // false

setTable.delete('key1');
console.log(setTable.has('key')); // false

setTable.add('newKey');
console.log(setTable.size); // 2
setTable.clear();
console.log(setTable.size); // 0
