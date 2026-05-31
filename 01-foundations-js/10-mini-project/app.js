// 01-foundations-js/10-mini-project/app.js

// Select DOM elements to interact with the UI
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// The "State" of our application: the single source of truth
let tasks = [];

// Renders the current state of the 'tasks' array to the HTML list
const renderTasks = () => {
  taskList.innerHTML = ''; // Clear existing list to prevent duplicates

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.text;

    // Apply conditional styling based on completion state
    if (task.completed) {
      li.style.textDecoration = 'line-through';
    }

    li.addEventListener('click', () => {
      toggleTask(task.id);
    });

    taskList.appendChild(li);
  });
};

// Adds a new task object to the state array and triggers a re-render
const addTask = () => {
  const text = taskInput.value;
  if (!text) return; // Prevent empty tasks

  const newTask = {
    id: Date.now(), // Unique ID based on timestamp
    text,
    completed: false
  };

  // Immutable update: create a new array instead of modifying the existing one
  tasks = [...tasks, newTask];

  renderTasks();
  taskInput.value = '';
};

// Updates the 'completed' status of a specific task within the state
const toggleTask = id => {
  // Use map to create a new array with the updated task
  tasks = tasks.map(task => {
    if (task.id === id) {
      // Use spread operator to preserve existing properties while toggling 'completed'
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  renderTasks();
};

addBtn.addEventListener('click', addTask);
