import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton, Tooltip } from '@mui/material';
import { useAppSelector } from '../../../store/store';

function Profile() {
  const loginName = useAppSelector((state) => state.account.login);
  return (
    <Tooltip title={loginName} placement="right">
      <IconButton
        component={Link}
        to="/profile"
        sx={{
          transform: 'scale(2.5)',
          marginBottom: '0',
        }}
      >
        <AccountCircleIcon />
      </IconButton>
    </Tooltip>
  );
}

export default Profile;
