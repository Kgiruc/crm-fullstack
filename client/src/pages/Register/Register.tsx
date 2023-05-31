import { useNavigate } from 'react-router-dom';
import { User } from '../../models/login';
import { useAppDispatch } from '../../store/store';
import RegisterForm from './components/RegisterForm';
import { useRegisterMutation } from './services/registerApi';
import { addLoginUser } from '../Login/services/accountSlice';

function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [register, { error, isLoading }] = useRegisterMutation();

  const initialUser: User = {
    login: '',
    e_mail: '',
    password: '',
  };

  const registerHandler = async (values: User) => {
    const result = await register(values);
    console.log(result)
    if ('data' in result) {
      dispatch(
        addLoginUser({ login: result.data.login, email: result.data.e_mail })
      );
      navigate('/');
    }
  };
  return (
    <section>
      {isLoading && <p>Loading...</p>}
      {error && <p>Użytkownik istnieje</p>}
      <RegisterForm
        initialUser={initialUser}
        buttonFunction={registerHandler}
      />
    </section>
  );
}

export default Register;
