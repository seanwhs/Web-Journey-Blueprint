// 01-foundations-js/04-functions/hoisting.js

/**
 * HOISTING DEMONSTRATION
 * Hoisting occurs before the code is executed, during the compilation phase.
 */

// 1. Function Declarations are fully hoisted.
// The engine reads this function first, so it is available globally.
console.log(greet()); // Outputs: "Hello!"

function greet() {
  return "Hello!";
}

// 2. 'var' variables are hoisted but initialized to 'undefined'.
// The engine knows the variable exists, but not yet its assigned value.
console.log(myVar); // Outputs: undefined
var myVar = 10;

// 3. 'let' and 'const' are hoisted but remain uninitialized.
// They exist in a "Temporal Dead Zone" (TDZ) from the top of the block 
// until the line where they are declared.
try {
  console.log(myLet); // Throws: ReferenceError
} catch (e) {
  console.log(`Error: ${e.message}`); // "Cannot access 'myLet' before initialization"
}
let myLet = 20;
