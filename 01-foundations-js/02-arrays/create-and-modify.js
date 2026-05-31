// 01-foundations-js/02-arrays/create-and-modify.js

/**
 * Array Creation and Modification
 * Best Practice: Use 'const' for arrays. Even if the contents change, 
 * the variable reference remains the same.
 */

// 1. Array Creation
// While JS allows mixing types, it is generally best practice to keep 
// arrays uniform for performance and predictability.
const mixedData = ["Hello", 25, true]; 
const fruits = ["Apple", "Banana", "Mango"];

// 2. Direct Modification (Mutating)
// Directly updating by index changes the original array.
fruits[1] = "Grape"; 
console.log("Modified Fruits:", fruits); 

// 3. Modern Modification (Immutable/Non-mutating)
// In modern apps (like React), we often prefer creating a new array
// instead of changing the original, using the spread operator.
const newFruits = [...fruits.slice(0, 1), "Orange", ...fruits.slice(2)];

console.log("Original Array Reference:", fruits); 
console.log("New Array (Immutable update):", newFruits);
