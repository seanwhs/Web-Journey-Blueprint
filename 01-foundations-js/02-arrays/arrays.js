// 01-foundations-js/02-arrays/arrays.js

// Initial array of todo items
const todos = [
  'Learn JavaScript',
  'Learn React',
  'Build Projects'
];

// 1. Spread Operator (...): Creates a NEW array containing existing items
// plus a new one, keeping the original 'todos' array unchanged.
const updatedTodos = [
  ...todos, 
  'Deploy Application'
];

// 2. Filter method: Creates a NEW array by checking every item 
// against a condition.
const filteredTodos = updatedTodos.filter(
  todo => todo !== 'Learn React' // Keep everything that IS NOT 'Learn React'
);

console.log('Original Todos:', todos);        // Still has 3 items
console.log('Updated Todos:', updatedTodos);  // Has 4 items
console.log('Filtered Todos:', filteredTodos); // Has 3 items (React removed)
