// 01-foundations-js/12-loops/for-of.js

/**
 * The 'for...of' loop is ideal for iterating over iterable objects 
 * (like Arrays, Strings, Maps, or Sets) when you need the value 
 * rather than the index.
 */

const tasks = ['Design UI', 'Write Documentation', 'Deploy to Staging'];

// Using a guard clause or checking length is good practice if data is dynamic
if (tasks.length > 0) {
  for (const task of tasks) {
    console.log(`Doing: ${task}`);
  }
} else {
  console.log('No tasks available.');
}

/**
 * PRO TIP: If you find yourself needing both the index and the value, 
 * use the .entries() method:
 * * for (const [index, task] of tasks.entries()) {
 * console.log(`Task ${index + 1}: ${task}`);
 * }
 */
