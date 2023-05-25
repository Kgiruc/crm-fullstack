import { Link } from 'react-router-dom';
import { User } from '../../models/login';
import LoginForm from './componenets/LoginForm';

function Login() {
  const initialUser: User = {
    login: '',
    password: '',
  };

  return (
    <section>
      <LoginForm initialUser={initialUser} />
      <p>Nie masz konta</p>
      <Link to="/register">Zarejestruj się</Link>
    </section>
  );
}

export default Login;
