// 01-foundations-js/01-variables/avoid-var.js

/**
 * Demonstrating why 'var' causes scope leaks
 * and how 'let'/'const' provide safety.
 */

function demonstrateVar() {
  if (true) {
    var x = 10; // Declared with var
  }
  // 'var' is function-scoped. It ignores the 'if' block boundaries.
  console.log("var value:", x); // Prints 10 (Leaked out of the block)
}

function demonstrateBlockScope() {
  if (true) {
    let y = 10; // Declared with let
    const z = 20; // Declared with const
  }
  
  // 'let' and 'const' are block-scoped. They exist only within { }
  try {
    console.log(y); 
  } catch (error) {
    console.error("let value:", error.message); // ReferenceError: y is not defined
  }
}

demonstrateVar();
demonstrateBlockScope();
