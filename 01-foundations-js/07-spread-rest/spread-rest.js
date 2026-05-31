// 01-foundations-js/07-spread-rest/spread-rest.js

/**
 * Spread Syntax: Expanding elements
 * Rest Syntax: Collecting elements
 */

// 1. Spread Operator (...): Expands an array into individual elements
const todos = ['React', 'TypeScript'];
const updatedTodos = [...todos, 'Next.js']; 
// Essentially: ['React', 'TypeScript', 'Next.js']

console.log(updatedTodos); // ['React', 'TypeScript', 'Next.js']

// 2. Rest Parameter (...): Collects multiple arguments into a single array
const sum = (...numbers) => {
  // 'numbers' is now an array: [1, 2, 3, 4]
  return numbers.reduce((total, number) => total + number, 0);
};

console.log(sum(1, 2, 3, 4)); // 10
