const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr.map(item => item * 2);
console.log(newArr);

const users = [
  {
    id: 1,
    username: 'mra',
  },
  {
    id: 2,
    username: 'test',
  },
  {
    id: 3,
    username: 'userx',
  },
];

console.log(users.map(user => `ID: ${user.id}, Username: ${user.username}`));
