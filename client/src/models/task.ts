export interface Task {
  id?: string;
  title: string;
  description: string;
  due_date: string;
  priority: number;
  status: string;
  created_at?: string;
  updated_at?: string;
}
