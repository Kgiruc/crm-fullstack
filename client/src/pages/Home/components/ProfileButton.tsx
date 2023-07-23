import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton, Tooltip, Typography } from '@mui/material';
import { useAppSelector } from '../../../store/store';

function Profile() {
  const loginName = useAppSelector((state) => state.account.login);
  return (
    <>
      <Tooltip
        title={<Typography variant="subtitle1">{loginName}</Typography>}
        placement="right"
        sx={{ fontSize: '16px' }}
      >
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
      <Typography variant="subtitle1" sx={{ margin: '5px' }}>
        Mój profil
      </Typography>
    </>
  );
}

export default Profile;
