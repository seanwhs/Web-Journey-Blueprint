// 01-foundations-js/05-array-methods/array-methods.js

/**
 * Array Methods: Transformation, Filtering, Accumulation, and Search
 */

const products = [
  { id: 1, name: 'Keyboard', price: 120 },
  { id: 2, name: 'Mouse', price: 60 },
  { id: 3, name: 'Monitor', price: 450 }
];

// 1. .map(): Transforms each element into something else.
const productNames = products.map(product => product.name);

// 2. .filter(): Selects elements based on a condition (returns a NEW array).
const expensiveProducts = products.filter(product => product.price > 100);

// 3. .reduce(): Condenses an array into a single value.
const total = products.reduce((sum, product) => sum + product.price, 0);

// 4. .find(): Returns the FIRST element that matches the condition.
// Useful for grabbing a specific item by its unique ID or property.
const findKeyboard = products.find(product => product.name === 'Keyboard');

console.log('Names:', productNames);
console.log('Expensive:', expensiveProducts);
console.log('Total Price:', total);
console.log('Found Item:', findKeyboard); // { id: 1, name: 'Keyboard', price: 120 }
