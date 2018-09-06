/*
const asyncFn = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('async response');
      reject('error');
    }, 3000);
  });
*/

const asyncFn = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('async response');
    }, 3000);
  });

asyncFn()
  .then(output => output.toUpperCase())
  .then(upperCaseOutput => console.log(upperCaseOutput))
  .then(() => {
    console.log('finish');
  })
  .catch(err => console.log(err));

const asyncFn2 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('async response 2');
    }, 1000);
  });

Promise.all([asyncFn(), asyncFn2(), 'senkron data']).then(values => console.log(values));
