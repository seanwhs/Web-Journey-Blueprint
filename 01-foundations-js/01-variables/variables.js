// Declare a constant for the course name, as it should not be reassigned
const courseName = 'Web Journey Blueprint'; 

// Declare a variable for student count and initialize it to 0
let studentCount = 0; 

// Increment the student count by 1 (reassignment)
studentCount += 1; 

// Output the final values to the console
console.log(courseName);   // Prints: Web Journey Blueprint
console.log(studentCount); // Prints: 1

// Declare a constant object to store user information
// Even though the object is a 'const', its properties can still be modified
const user = {
  name: 'Sean',  // Key-value pair for the name
  role: 'Student' // Key-value pair for the role
};

// Log the entire user object to the console
console.log(user);
