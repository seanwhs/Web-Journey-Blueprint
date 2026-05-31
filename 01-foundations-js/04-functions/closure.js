// 01-foundations-js/04-functions/closure.js
/**
 * Closure Example
 */

function createGreeting(greeting) {
  // 'greeting' is a variable in the outer scope
  return function(name) {
    // The inner function 'remembers' the 'greeting' variable
    // even after createGreeting() has finished executing.
    return `${greeting}, ${name}!`;
  };
}

// 'sayHello' now holds the inner function with 'greeting' set to 'Hello'
const sayHello = createGreeting('Hello');
// 'sayHi' now holds the inner function with 'greeting' set to 'Hi'
const sayHi = createGreeting('Hi');

console.log(sayHello('Sean')); // "Hello, Sean!"
console.log(sayHi('Taylor'));  // "Hi, Taylor!"
