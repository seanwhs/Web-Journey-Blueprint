const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <li>
      <span>
        {todo.completed ? '✅' : '⬜'} {todo.text}
      </span>

      <button onClick={() => onToggle(todo.id)}>
        Toggle
      </button>

      <button onClick={() => onRemove(todo.id)}>
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
