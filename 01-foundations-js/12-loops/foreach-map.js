// 01-foundations-js/12-loops/foreach-map.js

const tasks = ['Buy milk', 'Walk dog', 'Code'];

/**
 * 1. .map()
 * Use this when you want to transform your data. 
 * It ALWAYS returns a new array of the same length.
 */
const taskListItems = tasks.map((task) => `<li>${task}</li>`);
// Output: ["<li>Buy milk</li>", "<li>Walk dog</li>", "<li>Code</li>"]

/**
 * 2. .forEach()
 * Use this for "side effects" (e.g., logging, API calls, DOM manipulation).
 * It returns 'undefined' and simply iterates through the original array.
 */
tasks.forEach((task, index) => {
  console.log(`Task #${index + 1} is: ${task}`);
});
