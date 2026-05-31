import { useState } from 'react';
import { Task } from '../types/task';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false
    };

    setTasks(prev => [...prev, newTask]);
  };

  return {
    tasks,
    addTask
  };
};
