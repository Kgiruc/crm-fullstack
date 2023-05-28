import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/store';
import Login from '../pages/Login/Login';

function AuthRoutes() {
  const isLogin = useAppSelector((state) => state.account.isLogin);

  return isLogin ? <Outlet /> : <Login />;
}

export default AuthRoutes;
