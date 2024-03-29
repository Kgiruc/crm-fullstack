import {
  Link as MuiLink,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface FormLayoutProps {
  isLoading: boolean;
  isError: boolean | FetchBaseQueryError | SerializedError | undefined;
  login: boolean;
  children: ReactNode;
}

function FormLayout({ isLoading, isError, children, login }: FormLayoutProps) {
  return (
    <Container
      sx={{
        display: 'flex',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
        <Grid container spacing={2}>
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
                Błędne dane
              </Typography>
            </Grid>
          )}
          {children}
          {login && (
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                Nie masz konta?
                <MuiLink component={Link} to="/register">
                  Zarejestruj się
                </MuiLink>
              </Typography>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Container>
  );
}

export default FormLayout;
