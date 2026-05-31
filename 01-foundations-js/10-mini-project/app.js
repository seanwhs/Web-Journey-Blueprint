const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let tasks = [];

const renderTasks = () => {
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');

    li.textContent = task.text;

    li.addEventListener('click', () => {
      toggleTask(task.id);
    });

    taskList.appendChild(li);
  });
};

const addTask = () => {
  const text = taskInput.value;

  if (!text) return;

  const newTask = {
    id: Date.now(),
    text,
    completed: false
  };

  tasks = [...tasks, newTask];

  renderTasks();

  taskInput.value = '';
};

const toggleTask = id => {
  tasks = tasks.map(task => {
    if (task.id === id) {
      return {
        ...task,
        completed: !task.completed
      };
    }

    return task;
  });

  renderTasks();
};

addBtn.addEventListener('click', addTask);
