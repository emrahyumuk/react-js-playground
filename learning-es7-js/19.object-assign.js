const output = Object.assign(
  {},
  { key1: 'value1' },
  { key2: 'value2', key3: 'value3' },
  { key1: 'new-value' },
);

console.log(output);

/*
const obj1 = { key1: 'value1', key2: 'value2' };
const obj2 = obj1;
obj2.key2 = 'newValue';
console.log(obj2);
console.log(obj1);
*/

const obj1 = { key1: 'value1', key2: 'value2' };
const obj2 = Object.assign({}, obj1);
obj2.key2 = 'newValue';
console.log(obj2);
console.log(obj1);

// deep copy
const obj3 = { key1: { innerKey: 'value1' } };
const obj4 = JSON.parse(JSON.stringify(obj3));
obj4.key1.innerKey = 'newValue';
console.log(obj4);
console.log(obj3);
