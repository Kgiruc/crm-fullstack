import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/store';
import { User } from '../../models/login';
import LoginForm from './componenets/LoginForm';
import { useLoginMutation } from './services/loginApi';
import { addLogin } from './services/accountSlice';

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { error, isLoading }] = useLoginMutation();

  const initialUser: User = {
    login: '',
    password: '',
  };

  const loginHandler = async (values: User) => {
    const result = await login(values);
    if ('data' in result) {
      dispatch(addLogin(result.data.login));
      navigate('/');
    }
  };

  return (
    <section>
      {isLoading && <p>Loading...</p>}
      {error && <p>Błędne dane logowania</p>}
      <LoginForm initialUser={initialUser} buttonFunction={loginHandler} />
      <p>Nie masz konta?</p>
      <Link to="/register">Zarejestruj się</Link>
    </section>
  );
}

export default Login;
