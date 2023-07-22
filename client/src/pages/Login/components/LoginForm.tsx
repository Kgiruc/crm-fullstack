import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { User } from '../../../models/login';
import validationSchema from '../validations/formValidationsLogin';

interface FormUserProps {
  buttonFunction: (values: User) => void;
  initialUser: User;
}

function LoginForm({ initialUser, buttonFunction }: FormUserProps) {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 3,
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>
          Zaloguj się
        </Typography>
        <Formik
          initialValues={initialUser}
          onSubmit={buttonFunction}
          validationSchema={validationSchema}
        >
          <Form style={{ width: '100%', marginTop: 3 }}>
            <Field
              type="text"
              id="login"
              name="login"
              as={TextField}
              label="Login"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <ErrorMessage name="login">
              {(msg) => (
                <Typography variant="body2" color="red" marginBottom="20px">
                  {msg}
                </Typography>
              )}
            </ErrorMessage>

            <Field
              type="password"
              id="password"
              name="password"
              as={TextField}
              label="Password"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <ErrorMessage name="password">
              {(msg) => (
                <Typography variant="body2" color="red" marginBottom="20px">
                  {msg}
                </Typography>
              )}
            </ErrorMessage>

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Zaloguj
            </Button>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
}

export default LoginForm;
