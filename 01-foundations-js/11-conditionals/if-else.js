// 01-foundations-js/11-conditionals/if-else.js

const score = 85;

// 1. First condition
if (score >= 90) {
  console.log('Grade: A');
} 
// 2. Second condition (only checked if the first was false)
else if (score >= 80) {
  console.log('Grade: B');
} 
// 3. Third condition (only checked if the previous ones were false)
else if (score >= 70) {
  console.log('Grade: C');
} 
// 4. Default fallback if all conditions above are false
else {
  console.log('Grade: F');
}
