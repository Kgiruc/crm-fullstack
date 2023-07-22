import { Link, useNavigate } from 'react-router-dom';
import {
  Typography,
  CircularProgress,
  Container,
  Paper,
  Grid,
  Link as MuiLink,
  Button,
} from '@mui/material';
import { useAppDispatch } from '../../store/store';
import { User } from '../../models/login';
import LoginForm from './components/LoginForm';
import { useLoginMutation } from './services/loginApi';
import { addLoginUser } from './services/accountSlice';

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
      dispatch(
        addLoginUser({ login: result.data.login, email: result.data.e_mail })
      );
      navigate('/');
    }
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
      <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Login
            </Typography>
          </Grid>
          {isLoading && (
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <CircularProgress />
            </Grid>
          )}
          {error && (
            <Grid item xs={12}>
              <Typography variant="body1" color="error" align="center">
                Błędne dane logowania
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <LoginForm
              initialUser={initialUser}
              buttonFunction={loginHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              Nie masz konta?{' '}
              <MuiLink component={Link} to="/register">
                Zarejestruj się
              </MuiLink>
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/forgot-password"
            >
              Zapomniałeś hasła?
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Login;
