import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/store';

function Profile() {
  const loginName = useAppSelector((state) => state.account.login);
  return <Link to="/profile">{loginName}</Link>;
}

export default Profile;
