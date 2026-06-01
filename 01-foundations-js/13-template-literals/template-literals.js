// 01-foundations-js/13-template-literals/template-literals.js

const user = {
  name: 'Alex',
  role: 'Developer'
};

const hoursWorked = 45;

// Template literals use backticks (``) instead of quotes
const report = `
  Employee Report:
  ----------------
  Name: ${user.name.toUpperCase()}    // ${} executes the toUpperCase() method directly
  Role: ${user.role}                  // ${} injects the property value from the object
  Overtime: ${hoursWorked > 40 ? 'Yes' : 'No'} // Ternary operator evaluates condition inline
  Bonus: $${hoursWorked * 10}         // Perform math calculations inside the expression
`;

// Template literals preserve all line breaks and spacing within the backticks
console.log(report);
