// 01-foundations-js/12-loops/for.js

/**
 * The traditional 'for' loop is best when you need full control 
 * over the iteration, such as skipping elements, iterating 
 * backwards, or modifying the index.
 */

const tasks = ['Design UI', 'Write Documentation', 'Deploy to Staging'];

// Using 'const' for the index is not possible as it increments, 
// but we keep the scope limited to the loop block.
for (let i = 0; i < tasks.length; i++) {
  const taskNumber = i + 1;
  console.log(`Task ${taskNumber}: ${tasks[i]}`);
}
