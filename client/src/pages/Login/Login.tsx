import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../models/login';
import LoginForm from './componenets/LoginForm';
import { useLoginMutation } from './services/loginApi';

function Login() {
  const navigate = useNavigate();
  const [login, { error, isLoading }] = useLoginMutation();

  const initialUser: User = {
    login: '',
    password: '',
  };

  const loginHandler = async (values: User) => {
    const result = await login(values);
    if ('data' in result) {
      document.cookie = `accessToken=${result.data.token}; path=/`;
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
