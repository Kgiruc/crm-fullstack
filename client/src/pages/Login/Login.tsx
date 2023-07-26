import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/store';
import { User } from '../../models/login';
import LoginForm from './components/LoginForm';
import { useLoginMutation } from './services/loginApi';
import { addLoginUser } from './services/accountSlice';
import FormLayout from '../../components/FormLayout';

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { isError, isLoading }] = useLoginMutation();

  const initialUser: User = {
    login: '',
    password: '',
  };

  const loginHandler = async (values: User) => {
    const result = await login(values);
    if ('data' in result) {
      dispatch(
        addLoginUser({ login: result.data.login, email: result.data.e_mail })
      );
      navigate('/');
    }
  };

  return (
    <FormLayout isLoading={isLoading} isError={isError} login>
      <LoginForm initialUser={initialUser} buttonFunction={loginHandler} />
    </FormLayout>
  );
}

export default Login;
