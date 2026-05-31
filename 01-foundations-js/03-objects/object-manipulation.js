// 01-foundations-js/03-objects/object-manipulation.js

let user = {
    name: 'John',
    age: 30,
};

// --- Accessing Properties ---
let userName = user.name;  // Dot notation (cleanest)
let userAge = user['age']; // Bracket notation (useful for dynamic keys)

// --- Adding Properties & Methods ---
user.isAdmin = true;       // Adding a new property
user.introduce = function() { 
    console.log("Hi, I am " + this.name);
};

// --- Deleting Properties ---
delete user.age;           // Removes the property from the object entirely

console.log(user); 
// Output: { name: 'John', isAdmin: true, introduce: [Function] }
