export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export type TaskStatus =
  | 'all'
  | 'active'
  | 'completed';
