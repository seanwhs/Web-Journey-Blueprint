/**
 * Assignment Operators: Modify variables in place.
 */
let x = 10; 
x += 5;  // Addition assignment: x = x + 5 (15)
x -= 3;  // Subtraction assignment: x = x - 3 (12)
x *= 2;  // Multiplication assignment: x = x * 2 (24)
x /= 4;  // Division assignment: x = x / 4 (6)
console.log(`Final value of x: ${x}`);

/**
 * Equality Operators:
 * == (Loose) performs type coercion (converts types to match)
 * === (Strict) checks both value and type
 */

// Loose Equality (==)
console.log(5 == '5');  // true: JS converts the string '5' to the number 5 before comparing
console.log(5 != '5');  // false: Because 5 == '5' is true, the inequality is false

// Strict Equality (===)
console.log(5 === '5'); // false: Number 5 is not the same type as String '5'
console.log(5 !== '5'); // true: They are not strictly equal
