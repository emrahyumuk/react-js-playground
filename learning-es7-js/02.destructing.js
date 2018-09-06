const props = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: 'value4',
  prop5: 'value5',
};

/*
const prop1 = props.prop1;
const prop2 = props.prop2;
*/

const { prop1, prop3, prop6 = 'value6' } = props;
console.log(prop1);
console.log(prop3);
console.log(prop6);

const arr = [1, 2, 3];
const [var1, var2, var3] = arr;
console.log(var1);
console.log(var2);
console.log(var3);

// ---------------------------------------------------------

const props2 = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: 'value4',
  prop5: 'value5',
  prop6: {
    key1: 'value6',
    key2: 'value7',
  },
};

const {
  prop6: { key1 },
} = props2;
console.log(key1);

const {
  prop6: { key1: testVar1 },
} = props2;
console.log(testVar1);
