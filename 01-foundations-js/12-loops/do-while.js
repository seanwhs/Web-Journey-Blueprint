// 01-foundations-js/12-loops/do-while.js

/**
 * The 'do...while' loop is perfect for scenarios where you need 
 * to perform an action at least once, such as prompting a user 
 * for input or reading from a stream.
 */

let count = 5;

do {
  // Logic here executes at least once
  console.log(`Execution guaranteed. Current count: ${count}`);
  count++;
} while (count < 3); // Condition checked after the first execution

console.log('Loop terminated.');
