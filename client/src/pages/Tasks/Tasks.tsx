import TasksList from './components/TasksList';
import { useTasksQuery } from './services/tasksApi';
import TablesLayout from '../../components/TablesLayout';

function Tasks() {
  const { data, error, isLoading, isSuccess, isFetching } = useTasksQuery();

  return (
    <TablesLayout
      title="Agreements"
      isLoading={isLoading}
      isFetching={isFetching}
      isError={error}
      isSuccess={isSuccess}
      headers={[
        'Title',
        'description',
        'due_date',
        'priority',
        'status',
        'created_at',
        'update_at',
        'actions',
      ]}
      linkAdress="/tasks/add"
      linkTitle="Add Task"
      filter={false}
    >
      {data && <TasksList tasks={data} />}
    </TablesLayout>
  );
}

export default Tasks;
