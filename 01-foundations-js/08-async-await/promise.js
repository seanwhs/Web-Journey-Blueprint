// Web-Journey-Blueprint/01-foundations-js/08-async-await/promise.js

const fetchUsersWithPromises = () => {
  // 1. STATE: 'pending'. 
  // 'fetch' returns a Promise object immediately while the network request runs in the background.
  fetch('https://jsonplaceholder.typicode.com/users')
    
    // 2. STATE TRANSITION: 'pending' -> 'fulfilled' (if successful).
    // '.then()' attaches a handler that the Promise engine will execute once the state changes to 'fulfilled'.
    .then((response) => {
      // 3. CHAINING: We return a new Promise (response.json()).
      // The promise chain waits for this NEW promise to resolve before moving to the next block.
      return response.json();
    })
    
    // 4. STATE: 'fulfilled'.
    // The previous Promise resolved, and the resulting 'users' data is now available.
    .then((users) => {
      console.log(users);
    })
    
    // 5. STATE TRANSITION: 'pending' -> 'rejected' (if an error occurs).
    // If ANY step above fails, the chain skips all subsequent '.then()' blocks
    // and jumps straight to this '.catch()' handler.
    .catch((error) => {
      // The Promise has reached the 'rejected' state.
      console.error('Fetch failed:', error);
    });
};

fetchUsersWithPromises();
