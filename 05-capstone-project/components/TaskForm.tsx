import { createTask } from '../lib/actions';

export default function TaskForm() {
  return (
    <form action={createTask}>
      <input
        name="title"
        placeholder="Enter task"
      />

      <button type="submit">
        Create Task
      </button>
    </form>
  );
}
