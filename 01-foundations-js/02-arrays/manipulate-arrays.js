// 01-foundations-js/02-arrays/manipulate-arrays.js

/**
 * Array Manipulation
 * Note: 'const' is used for the array variable itself.
 * Even with 'const', we can modify the contents (push/pop).
 */

const colors = ["Red", "Green", "Blue"];

// 1. Reading Length
// .length returns the current count of elements
console.log("Initial count:", colors.length); // 3

// 2. Adding Elements
// .push() adds an item to the END of the array
colors.push("Yellow");
console.log("After push:", colors); 

// 3. Removing Elements
// .pop() removes the LAST item from the array
colors.pop();
console.log("After pop:", colors);
