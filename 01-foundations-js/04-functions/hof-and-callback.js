// 01-foundations-js/04-functions/hof-and-callback.js
/**
 * Higher-Order Function (HOF): processData
 * It is a "Higher-Order" function because it takes another function (a callback)
 * as an argument to customize its behavior.
 */
function processData(name, taskAction, callback) {
  console.log(`--- Orchestrator: Starting ${taskAction} for ${name} ---`);
  
  // Primary Logic: The HOF handles the workflow
  const result = `${taskAction} completed for ${name}`;
  
  // Callback Execution: The "Hand-off"
  // The HOF doesn't know how to format the message; it delegates
  // that decision to the callback provided at runtime.
  return callback(result);
}

// CALLBACKS: These are the functions passed into the HOF to be executed later.
const formatters = {
  shout: (msg) => msg.toUpperCase() + "!!!",
  notify: (msg) => `Notification: ${msg}`
};

// Usage: Passing the HOF and the Callback together
const output1 = processData('Sean', 'Data Sync', formatters.shout);
const output2 = processData('Latte', 'Brewing', formatters.notify);

console.log(output1);
console.log(output2);
