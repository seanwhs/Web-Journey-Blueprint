const user = {
  id: 1,
  name: 'Sean',
  isAdmin: false
};

const updatedUser = {
  ...user,
  isAdmin: true
};

console.log(user);
console.log(updatedUser);
