import { useLocation, useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';
import { Task } from '../../../models/task';
import FormTask from './FormTask';
import { useUpdateTaskMutation } from '../services/tasksApi';

function EditTask() {
  const [updateTask] = useUpdateTaskMutation();
  const navigate = useNavigate();
  const location = useLocation();

  const { id, title, description, due_date, priority, status } =
    location.state as Task;

  const initialTask = {
    id,
    title,
    description,
    due_date: DateTime.fromISO(due_date).toISODate() as string,
    priority,
    status,
  };

  const updateHandler = async (values: Task) => {
    await updateTask(values);
    navigate('/tasks');
  };

  return (
    <section>
      <FormTask buttonFunction={updateHandler} initialTask={initialTask} />
    </section>
  );
}

export default EditTask;
