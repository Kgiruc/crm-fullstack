import { useNavigate } from 'react-router-dom';
import { Button, List, ListItem, Typography } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useLogoutMutation } from './services/profileApi';
import { resetProfileInfo } from '../Login/services/accountSlice';

function Profile() {
  const profileInfo = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    logout(e);
    dispatch(resetProfileInfo());
    navigate('/');
  };
  return (
    <List>
      <ListItem>
        <Typography variant="body1">Login: {profileInfo.login}</Typography>
      </ListItem>
      <ListItem>
        <Typography variant="body1">Email: {profileInfo.email}</Typography>
      </ListItem>
      <ListItem>
        <Button
          variant="contained"
          startIcon={<ExitToAppIcon />}
          onClick={handleLogout}
        >
          Wyloguj się
        </Button>
      </ListItem>
    </List>
  );
}

export default Profile;
