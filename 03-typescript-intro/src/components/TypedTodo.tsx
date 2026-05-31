import { useState } from 'react';
import { Task } from '../types/task';

const TypedTodo = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [input, setInput] = useState<string>('');

  const addTask = () => {
    if (!input.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInput('');
  };

  return (
    <section>
      <h2>Typed Todo</h2>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <button onClick={addTask}>
        Add
      </button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TypedTodo;
