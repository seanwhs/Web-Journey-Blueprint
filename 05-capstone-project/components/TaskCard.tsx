import { Task } from '../types/task';

type TaskCardProps = {
  task: Task;
};

export default function TaskCard({
  task
}: TaskCardProps) {
  return (
    <article>
      <h3>{task.title}</h3>

      <p>
        Status:
        {task.completed
          ? 'Completed'
          : 'Pending'}
      </p>
    </article>
  );
}
