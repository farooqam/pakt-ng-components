export interface Task {
  id: string;
  title: string;
  done: boolean;
}

export type TaskListFilterType = 'all' | 'open' | 'done';