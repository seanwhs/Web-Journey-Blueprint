// 01-foundations-js/12-loops/foreach-map.js
// modern way

const tasks = ['Buy milk', 'Walk dog', 'Code'];

// 1. .map() — Best for creating UI (Returns a new array)
const taskListItems = tasks.map(task => `<li>${task}</li>`);

// 2. .forEach() — Best for side effects (Logs, database saves, etc.)
tasks.forEach(task => console.log(`Processing: ${task}`));
