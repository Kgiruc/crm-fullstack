import { useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';
import { Task } from '../../../models/task';
import { useAddTaskMutation } from '../services/tasksApi';
import FormTask from './FormTask';
import FormLayout from '../../../components/FormLayout';

function AddTask() {
  const [addTask, { isError, isLoading }] = useAddTaskMutation();
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
    <FormLayout isError={isError} isLoading={isLoading} login={false}>
      <FormTask buttonFunction={AddHandler} initialTask={initialTask} />
    </FormLayout>
  );
}

export default AddTask;
