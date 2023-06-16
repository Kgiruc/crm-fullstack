import { Link } from 'react-router-dom';
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
        <>
          <table>
            <thead>
              <tr>
                <th>title</th>
                <th>description</th>
                <th>due_date</th>
                <th>priority</th>
                <th>status</th>
                <th>created_at</th>
                <th>update_at</th>
                <th>actions</th>
              </tr>
            </thead>
            <TasksList tasks={data} />
          </table>
          <Link to="/tasks/add">Add tasks</Link>
        </>
      )}
    </section>
  );
}

export default Tasks;
