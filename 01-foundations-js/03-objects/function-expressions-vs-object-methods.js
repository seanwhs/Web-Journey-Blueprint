// 01-foundations-js/03-objects/function-expressions-vs-object-methods.js

/**
 * Function Expressions vs. Object Methods
 */

// 1. Standard Function Declaration
function startEngine() {
  return 'Engine started!';
}

// 2. Function Expression assigned to a variable
const startCar = function(key) {
  if (key === 'correct') {
    return 'Engine started!';
  }
  return 'Access denied.';
};

const car = {
  color: 'red',
  
  // 3. Method using an Anonymous Function Expression
  start: function(key) {
    if (key === 'correct') {
      return 'Engine started!';
    }
  },

  // 4. Method using ES6 Method Shorthand (Preferred)
  displayColor() {
    // 'this' refers to the object the method belongs to
    console.log(`The color of the car is ${this.color}`);
  }
};

// --- Usage ---
console.log(car.start('correct')); // Returns "Engine started!"
car.displayColor();                // Logs "The color of the car is red"
