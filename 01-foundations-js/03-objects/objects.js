// Web-Journey-Blueprint/01-foundations-js/03-objects/objects.js

// Initial object representing a user
const user = {
  id: 1,
  name: 'Sean',
  isAdmin: false
};

// Spread Operator (...) creates a shallow copy of 'user'
// and overrides specific properties in the new object.
// The original 'user' object remains untouched.
const updatedUser = {
  ...user,         // 1. Copy all existing properties from 'user'
  isAdmin: true    // 2. Override 'isAdmin' with a new value
};

// Verification
console.log('Original User:', user);       // isAdmin: false
console.log('Updated User:', updatedUser); // isAdmin: true
