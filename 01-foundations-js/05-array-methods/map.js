// 01-foundations-js/05-array-methods/map.js

const stars = ['Sirius', 'Vega', 'Rigel', 'Polaris'];

/**
 * .map() is a Higher-Order Function.
 * It creates a new array without modifying the original 'stars' array.
 */
const brightStars = stars.map((star) => {
    // The value returned here is what gets placed into the new array
    return `${star} is very bright!`;
});

console.log(brightStars); 
// Output: ['Sirius is very bright!', 'Vega is very bright!', ...]

// Verification: The original array remains unchanged
console.log(stars.length); // 4
