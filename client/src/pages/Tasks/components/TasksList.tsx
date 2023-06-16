import { DateTime } from 'luxon';
import { Task } from '../../../models/task';

type Props = {
  tasks: Task[];
};
function TasksList({ tasks }: Props) {
  return (
    <tbody>
      {tasks.map((task) => (
        <tr key={task.id}>
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td>{DateTime.fromISO(task.due_date).toISODate()}</td>
          <td>{task.priority}</td>
          <td>{task.status}</td>
          {task.created_at && (
            <td>{DateTime.fromISO(task.created_at).toISODate()}</td>
          )}
          {task.updated_at && (
            <td>{DateTime.fromISO(task.updated_at).toISODate()}</td>
          )}
        </tr>
      ))}
    </tbody>
  );
}

export default TasksList;
