import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/store';

function AuthRoutes() {
  const isLogin = useAppSelector((state) => state.account.isLogin);

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthRoutes;
