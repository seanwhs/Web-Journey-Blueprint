// 01-foundations-js/08-async-await/async-await.js

// 'async' declares that this function will implicitly return a Promise.
// It allows the use of 'await' inside the function body.
const fetchUsers = async () => {
  try {
    // 'await' pauses the execution of this specific function ONLY.
    // It tells the JavaScript engine: "Wait here until the fetch Promise resolves."
    // Meanwhile, the main thread is freed up to perform other tasks (like UI updates).
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );

    // Execution resumes once the response headers are received.
    // Again, 'await' pauses the function until the body stream is fully 
    // parsed into JSON, which is an asynchronous operation.
    const users = await response.json();

    console.log(users);
  } catch (error) {
    // If any awaited Promise rejects (e.g., network failure), 
    // the error is caught here, just like synchronous try/catch.
    console.error(error);
  }
};

fetchUsers();
