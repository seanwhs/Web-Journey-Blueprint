// 01-foundations-js/05-array-methods/array-methods.js

/**
 * Array Methods: Transformation, Filtering, and Accumulation
 */

const products = [
  { id: 1, name: 'Keyboard', price: 120 },
  { id: 2, name: 'Mouse', price: 60 },
  { id: 3, name: 'Monitor', price: 450 }
];

// 1. .map(): Transforms each element into something else (returns a NEW array of the same length)
const productNames = products.map(product => product.name);

// 2. .filter(): Selects elements based on a condition (returns a NEW array of equal or smaller length)
const expensiveProducts = products.filter(product => product.price > 100);

// 3. .reduce(): Condenses an array into a single value (e.g., sum, object, or string)
const total = products.reduce((sum, product) => sum + product.price, 0);

console.log('Names:', productNames);       // ['Keyboard', 'Mouse', 'Monitor']
console.log('Expensive:', expensiveProducts); // [{ id: 1... }, { id: 3... }]
console.log('Total Price:', total);        // 630
