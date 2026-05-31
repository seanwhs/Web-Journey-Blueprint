/**
 * null vs undefined
 * * null: Intentional absence of any object value. 
 * "I have a jar, but it is explicitly empty."
 * * undefined: A variable that has been declared but not assigned a value.
 * "I have a label for a jar, but the jar doesn't exist yet."
 */

// --- null ---
let flowerJar = null; 
console.log("Flower jar status:", flowerJar); // Outputs: null

// --- undefined ---
let candyJar; 
console.log("Candy jar status:", candyJar);   // Outputs: undefined

// --- Comparison ---
console.log(null == undefined);  // true (loose equality: both are "falsy")
console.log(null === undefined); // false (strict equality: types differ)

// Type checking
console.log(typeof null);      // "object" (a long-standing JS legacy bug)
console.log(typeof undefined); // "undefined"
