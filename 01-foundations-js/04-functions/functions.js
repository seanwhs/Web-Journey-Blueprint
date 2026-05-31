// 01-foundations-js/04-functions/functions.js

/**
 * 1. Function Declaration
 * Hoisted (can be called before it's defined in the code).
 */
function greet(name) {
  return `Hello ${name}`;
}

/**
 * 2. Function Expression (Arrow Function)
 * Not hoisted. Uses a standard block body.
 * Great for multi-line logic.
 */
const greetArrow = name => {
  return `Welcome ${name}`;
};

/**
 * 3. Implicit Return Arrow Function
 * The most concise way to write a function.
 * If there is only one expression, the 'return' keyword 
 * and curly braces are optional.
 */
const shortGreeting = name => `Hi ${name}`;

// Execution
console.log(greet('Sean'));
console.log(greetArrow('Alex'));
console.log(shortGreeting('Taylor'));
