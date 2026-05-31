// 01-foundations-js/04-functions/callback-calling-patterns.js

/**
 * Callback Patterns: Anonymous vs. Named
 */

const numbers = [1, 2, 3];

// 1. Inline Arrow Function (Anonymous)
// Best for: Quick, one-off logic.
// It is "anonymous" because it has no name and cannot be referenced elsewhere.
const doubledInline = numbers.map((num) => num * 2);

// 2. Passing a Named Function (Reference)
// Best for: Complex logic, reusability, or improving code readability.
// By defining 'double' separately, we give the logic a name, 
// which makes the code easier to read and debug.
const double = (num) => num * 2;
const doubledWithRef = numbers.map(double); 

console.log(doubledInline); // [2, 4, 6]
console.log(doubledWithRef); // [2, 4, 6]
