// 01-foundations-js/09-modules/math.js

// 'export' keyword defines this as part of the ESM interface. 
// ESM uses a 'live binding' system, meaning this file provides a direct 
// reference to the functions rather than a static copy.

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
