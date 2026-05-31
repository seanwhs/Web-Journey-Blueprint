// 01-foundations-js/05-array-methods/for-each.js

const stars = ['Sirius', 'Vega', 'Rigel', 'Polaris'];

/**
 * .forEach() is a Higher-Order Function.
 * It executes the provided callback once for every array element.
 */

// 1. Basic iteration: Just the value
stars.forEach((star) => {
    console.log(star); 
});

// 2. Iteration with metadata: The callback can accept up to 3 arguments:
// (currentElement, currentIndex, originalArray)
stars.forEach((star, index) => {
    console.log(`Star ${star} is at index ${index}`);
});
