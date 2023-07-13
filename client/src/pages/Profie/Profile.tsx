import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useLogoutMutation } from './services/profileApi';
import { resetProfileInfo } from '../Login/services/accountSlice';

function Profile() {
  const profileInfo = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    logout(e);
    dispatch(resetProfileInfo());
    navigate('/');
  };
  return (
    <ul>
      <li>{profileInfo.login}</li>
      <li>{profileInfo.email}</li>
      <li>
        <button type="button" onClick={handleClick}>
          Wyloguj się
        </button>
      </li>
    </ul>
  );
}

export default Profile;
