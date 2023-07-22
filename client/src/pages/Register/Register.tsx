import { useNavigate } from 'react-router-dom';
import {
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { User } from '../../models/login';
import { useAppDispatch } from '../../store/store';
import RegisterForm from './components/RegisterForm';
import { useRegisterMutation } from './services/registerApi';
import { addLoginUser } from '../Login/services/accountSlice';

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
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper elevation={6} sx={{ padding: 3, marginTop: 4 }}>
        <Grid container spacing={5}>
          {isLoading && (
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <CircularProgress />
            </Grid>
          )}
          {isError && (
            <Grid item xs={12}>
              <Typography variant="body1" color="error" align="center">
                {getErrorMessage()}
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <RegisterForm
              initialUser={initialUser}
              buttonFunction={registerHandler}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Register;
