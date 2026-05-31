// 01-foundations-js/05-array-methods/find.js

/**
 * .find() is a Higher-Order Function.
 * It iterates through the array and returns the value of the 
 * first element that causes the callback to return 'true'.
 */

const numbers = [1, 3, 5, 2, 4, 6];

const firstEvenNumber = numbers.find((num) => {
    // The condition: is the number even?
    return num % 2 === 0;
});

console.log(firstEvenNumber); // 2
