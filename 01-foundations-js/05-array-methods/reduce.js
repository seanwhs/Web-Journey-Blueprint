// 01-foundations-js/05-array-methods/reduce.js

const numbers = [1, 2, 3, 4, 5];

/**
 * .reduce() requires two arguments:
 * 1. A callback (the "reducer"): (accumulator, currentValue) => { ... }
 * 2. An initial value: In this case, '0'
 */
const sum = numbers.reduce((total, number) => {
    // The 'total' is the value returned in the previous iteration
    // The 'number' is the current item being processed
    return total + number;
}, 0); // 0 is the starting point for 'total'

console.log(sum); // 15
