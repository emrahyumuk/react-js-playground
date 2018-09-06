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

const user = users.find(item => item.username === 'mra');
console.log(user);

const user2 = users.find(item => item.username === 'xyz');
console.log(user2);
