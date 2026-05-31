const todos = [
  'Learn JavaScript',
  'Learn React',
  'Build Projects'
];

const updatedTodos = [
  ...todos,
  'Deploy Application'
];

const filteredTodos = updatedTodos.filter(
  todo => todo !== 'Learn React'
);

console.log(updatedTodos);
console.log(filteredTodos);
