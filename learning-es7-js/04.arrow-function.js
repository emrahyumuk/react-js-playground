/*
function fn(param1, param2) {
  console.log(param1);
  console.log(param2);
}

fn(1, 2);
*/
const fn = (param1, param2) => {
  console.log(param1);
  console.log(param2);
};
fn(1, 2);

/*
const add = (param1, param2) => {
  return param1 + param2;
};
*/
const add = (param1, param2) => param1 + param2;
console.log(add(1, 2));

const pow = param1 => param1 ** 2;
console.log(pow(3));

/*
const fnx = ()=>(
  return{
    key1: 'value1',
    key2: 'value2'
});
*/
const fnx = () => ({
  key1: 'value1',
  key2: 'value2',
});
console.log(fnx());

const fny = (param1 = 'value') => ({
  key1: param1,
  key2: 'value2',
});
console.log(fny());
console.log(fny('value y'));

const fnz = (param1 = 'value', ...rest) => ({
  key1: param1,
  key2: 'value2',
  rest,
});
const result = fnz('value1', 'value3', 'value4', 'value5', 'value6');
console.log(result);
