// 01-foundations-js/04-functions/variable-scope.js

// --- Global Scope ---
// This variable is accessible anywhere in the script
let globalVariable = "I'm global!";

function checkScope() {
  // --- Local (Function) Scope ---
  // This variable only exists while 'checkScope' is running
  let localVariable = "I'm local!";
  
  console.log(globalVariable); // Works: Global is accessible inside local
  console.log(localVariable);  // Works: Local is accessible inside its own scope
}

checkScope();

// --- Accessing Variables ---
console.log(globalVariable); // Works: Global is still in scope

// Trying to access a local variable from outside its scope:
try {
  console.log(localVariable); 
} catch (error) {
  // This triggers an error because the code outside doesn't know 'localVariable' exists
  console.error("Error:", error.message); 
}
