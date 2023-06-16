import TasksList from './components/TasksList';
import { useTasksQuery } from './services/tasksApi';

function Tasks() {
  const { data, error, isLoading, isSuccess } = useTasksQuery();
  return (
    <section>
      <h1>All tasks</h1>
      {isLoading && <p>loading</p>}
      {error && <p>wystąpił błąd</p>}
      {isSuccess && (
        <table>
          <thead>
            <tr>title</tr>
            <tr>description</tr>
            <tr>due_date</tr>
            <tr>priority</tr>
            <tr>status</tr>
            <tr>created_at</tr>
            <tr>update_at</tr>
          </thead>
          <TasksList tasks={data} />
        </table>
      )}
    </section>
  );
}

export default Tasks;
