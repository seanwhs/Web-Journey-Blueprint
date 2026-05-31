// 01-foundations-js/12-loops/for-in.js
// Object Way

const user = { name: 'Sean', role: 'Dev', status: 'Active' };

/**
 * The 'for...in' loop is designed to iterate over the enumerable 
 * properties of an object.
 */
for (const key in user) {
  // Always verify the property belongs to the object itself 
  // rather than its prototype chain.
  if (Object.hasOwn(user, key)) {
    console.log(`${key}: ${user[key]}`);
  }
}
