const arr = [1, 2, 3, 4, 5];

const output = arr.some(value => value > 4);
console.log(output);

const output2 = arr.some(value => value >= 1);
console.log(output2);

const output3 = arr.some(value => value > 5);
console.log(output3);
