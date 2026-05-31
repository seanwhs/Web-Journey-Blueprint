// 01-foundations-js/05-array-methods/chaining-array-methods.js

/**
 * Chaining Array Methods
 * * Concept: Chaining allows you to take the output of one array method 
 * and immediately pass it into the next. This creates a clean, 
 * readable pipeline for transforming data.
 */

const products = [
  { id: 1, name: 'Keyboard', price: 120 },
  { id: 2, name: 'Mouse', price: 60 },
  { id: 3, name: 'Monitor', price: 450 }
];

// Example A: Standard Pipeline
const expensiveTotal = products
  .filter(product => product.price > 100)
  .map(product => product.price)
  .reduce((sum, price) => sum + price, 0);

// Example B: Using .find()
// Note: .find() returns an object, so we cannot chain .map() after it.
// It acts as a "terminal" method in this chain.
const expensiveKeyboard = products
  .filter(product => product.price > 100)
  .find(product => product.name === 'Keyboard');

console.log('Total of expensive items:', expensiveTotal); // 570
console.log('Found expensive item:', expensiveKeyboard);  // { id: 1, name: 'Keyboard', price: 120 }
