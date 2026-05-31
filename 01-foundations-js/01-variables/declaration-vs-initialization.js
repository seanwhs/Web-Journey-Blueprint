// --- 1. 'var': Function-scoped, can be redeclared ---
var status; // Declaration
status = "active"; // Initialization
var status = "pending"; // var allows redeclaration (usually avoided)

// --- 2. 'let': Block-scoped, allows reassignment ---
let age; // Declaration
age = 20; // Initialization
age = 21; // Reassignment is permitted

// --- 3. 'const': Block-scoped, requires immediate initialization ---
// const taxRate; // SyntaxError: Missing initializer in const declaration
const taxRate = 0.05; // Declaration and Initialization must happen together

// --- Scope Demonstration ---
if (true) {
  var functionScoped = "I am visible outside this block";
  let blockScoped = "I am hidden outside this block";
  const constantInBlock = "Also hidden outside";
}

console.log(functionScoped); // Works
// console.log(blockScoped); // ReferenceError
