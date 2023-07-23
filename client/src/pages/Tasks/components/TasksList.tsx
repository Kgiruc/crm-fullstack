import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';
import { IconButton, TableBody, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import { Task } from '../../../models/task';
import { useDeleteTaskMutation } from '../services/tasksApi';

type Props = {
  tasks: Task[];
};

function TasksList({ tasks }: Props) {
  const [deleteTask] = useDeleteTaskMutation();
  return (
    <TableBody>
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <TableRow>
            <TableCell>{task.title}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>{DateTime.fromISO(task.due_date).toISODate()}</TableCell>
            <TableCell>{task.priority}</TableCell>
            <TableCell>{task.status}</TableCell>
            {task.created_at && (
              <TableCell>
                {DateTime.fromISO(task.created_at).toISODate()}
              </TableCell>
            )}
            {task.updated_at && (
              <TableCell>
                {DateTime.fromISO(task.updated_at).toISODate()}
              </TableCell>
            )}
            <TableCell>
              <IconButton onClick={() => task.id && deleteTask(task.id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton
                component={Link}
                to={`/tasks/update/${task.id}`}
                state={task}
              >
                <EditIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </React.Fragment>
      ))}
    </TableBody>
  );
}

export default TasksList;
