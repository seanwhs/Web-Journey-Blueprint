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

const expensiveTotal = products
  // 1. Filter: Keep only items > 100
  .filter(product => product.price > 100)
  
  // 2. Map: Extract just the prices
  .map(product => product.price)
  
  // 3. Reduce: Sum the prices
  .reduce((sum, price) => sum + price, 0);

console.log('Total of expensive items:', expensiveTotal); // 570
