// 01-foundations-js/12-loops/while.js

/**
 * The 'while' loop is ideal for scenarios where the number of 
 * iterations is unknown and depends entirely on a changing condition.
 */

let count = 0;
const MAX_COUNT = 3;

// The condition is checked at the start of each iteration.
// If count is already 3 or greater, this block will not execute at all.
while (count < MAX_COUNT) {
  console.log(`Current iteration: ${count + 1}`);
  count++;
}

console.log('Loop finished.');
