// 01-foundations-js/05-array-methods/filter.js

const stars = ['Sirius', 'Vega', 'Rigel', 'Polaris', 'Betelgeuse'];

/**
 * .filter() checks every element against a condition.
 * If the condition returns 'true', the item is kept.
 * If 'false', it is discarded.
 */
const evenIndexedStars = stars.filter((star, index) => {
    // index % 2 === 0 checks if the position is even
    // (Indices: 0, 1, 2, 3, 4 -> 0, 2, 4 are even)
    return index % 2 === 0;
});

console.log(evenIndexedStars); 
// Output: ['Sirius', 'Rigel', 'Betelgeuse']
