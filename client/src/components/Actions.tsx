import { Box, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import Edit from '../assets/icons/edit.svg';
import More from '../assets/icons/more.svg';

function Actions({ ...row }) {
  return (
    <Box>
      <Tooltip title="edit user">
        <IconButton
          component={Link}
          state={row}
          to={`/customers/update/${row.id}`}
        >
          <img src={Edit} alt="edit" />
        </IconButton>
      </Tooltip>
      <Tooltip title="more information">
        <IconButton onClick={() => console.log(row)}>
          <img src={More} alt="more" />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default Actions;
