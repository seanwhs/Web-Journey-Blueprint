// 01-foundations-js/06-destructuring/destructuring.js

/**
 * Destructuring Assignment
 * This syntax provides a concise way to extract data from data structures.
 */

// 1. Object Destructuring
const user = {
  name: 'Sean',
  age: 30,
  country: 'Singapore'
};

// We extract 'name' and 'age' directly from the 'user' object.
const { name, age } = user;

console.log(name); // 'Sean'
console.log(age);  // 30

// 2. Array Destructuring
const colors = ['red', 'blue', 'green'];

// We extract values based on their position (index) in the array.
const [primary, secondary] = colors;

console.log(primary);   // 'red'
console.log(secondary); // 'blue'
