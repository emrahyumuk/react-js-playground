const asyncFn1 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('async response 1');
    }, 3000);
  });

const asyncFn2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error occured');
      // resolve('async response 2');
    }, 1000);
  });

const main = async () => {
  try {
    console.log('Start');
    const data1 = await asyncFn1();
    console.log('first promise ok');
    const data2 = await asyncFn2();
    console.log('second promise ok');
    console.log(`Data1: ${data1}, Data2: ${data2}`);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('end');
  }
};

main();
