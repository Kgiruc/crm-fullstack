import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../models/login';
import LoginForm from './componenets/LoginForm';
import { useLoginMutation } from './services/loginApi';

function Login() {
  const navigate = useNavigate();
  const [login, { error, isLoading, data }] = useLoginMutation();

  const initialUser: User = {
    login: '',
    password: '',
  };

  const loginHandler = async (values: User) => {
    await login(values);
    if (data) {
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
