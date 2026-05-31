import { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [input, setInput] = useState('');

  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!input) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  const toggleTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }

        return todo;
      })
    );
  };

  const removeTodo = id => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    );
  };

  return (
    <section>
      <h2>Todo List</h2>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <button onClick={addTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onRemove={removeTodo}
export default TodoList;
