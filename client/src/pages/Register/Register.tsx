import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { User } from '../../models/login';
import { useAppDispatch } from '../../store/store';
import RegisterForm from './components/RegisterForm';
import { useRegisterMutation } from './services/registerApi';
import { addLoginUser } from '../Login/services/accountSlice';
import FormLayout from '../../components/FormLayout';

function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [register, { error, isLoading, isError }] = useRegisterMutation();

  const initialUser: User = {
    login: '',
    e_mail: '',
    password: '',
  };

  const registerHandler = async (values: User) => {
    const result = await register(values);
    if ('data' in result) {
      dispatch(
        addLoginUser({ login: result.data.login, email: result.data.e_mail })
      );
      navigate('/');
    }
  };

  const getErrorMessage = () => {
    if (isError && error) {
      if ('data' in error && typeof error.data === 'object') {
        const data = error.data as { error?: string };
        if (data.error) {
          return data.error;
        }
      }
      return 'Wystąpił błąd';
    }
    return null;
  };

  return (
    <FormLayout isLoading={isLoading} isError={false} login={false}>
      {isError && (
        <Grid item xs={12}>
          <Typography variant="body1" color="error" align="center">
            {getErrorMessage()}
          </Typography>
        </Grid>
      )}
      <RegisterForm
        initialUser={initialUser}
        buttonFunction={registerHandler}
      />
    </FormLayout>
  );
}

export default Register;
