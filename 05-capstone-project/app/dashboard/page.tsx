import { prisma } from '../../lib/prisma';
import TaskCard from '../../components/TaskCard';
import TaskForm from '../../components/TaskForm';

export default async function DashboardPage() {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  return (
    <main>
      <h1>Dashboard</h1>

      <TaskForm />

      <section>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={{
              ...task,
              createdAt:
                task.createdAt.toISOString()
            }}
          />
        ))}
      </section>
    </main>
  );
}
