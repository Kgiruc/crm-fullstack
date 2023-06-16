import { useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';
import { Task } from '../../../models/task';
import { useAddTaskMutation } from '../services/tasksApi';
import FormTask from './FormTask';

function AddTask() {
  const [addTask] = useAddTaskMutation();
  const navigate = useNavigate();

  const initialTask: Task = {
    title: '',
    description: '',
    due_date: DateTime.local().toISODate() as string,
    priority: 1,
    status: '',
  };

  const AddHandler = async (values: Task) => {
    await addTask(values);
    navigate('/tasks');
  };
  return (
    <section>
      <FormTask buttonFunction={AddHandler} initialTask={initialTask} />
    </section>
  );
}

export default AddTask;
