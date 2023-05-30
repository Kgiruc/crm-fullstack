import { useAppSelector } from '../../store/store';

function Profile() {
  const profileInfo = useAppSelector((state) => state.account);
  return (
    <ul>
      <li>{profileInfo.login}</li>
      <li>{profileInfo.email}</li>
    </ul>
  );
}

export default Profile;
