import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import validationSchema from '../validations/formValidationsRegister';
import { User } from '../../../models/login';

interface FormRegisterProps {
  buttonFunction: (values: User) => void;
  initialUser: User;
}

function RegisterForm({ initialUser, buttonFunction }: FormRegisterProps) {
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
          Rejestracja
        </Typography>
        <Formik
          initialValues={initialUser}
          onSubmit={buttonFunction}
          validationSchema={validationSchema}
        >
          <Form style={{ width: '100%', marginTop: '20px' }}>
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

            <Field
              type="e_mail"
              id="e_mail"
              name="e_mail"
              as={TextField}
              label="Email"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
            />

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
                <Typography variant="body2" color="red" marginBottom="10px">
                  {msg}
                </Typography>
              )}
            </ErrorMessage>
            <ErrorMessage name="login">
              {(msg) => (
                <Typography variant="body2" color="red" marginBottom="10px">
                  {msg}
                </Typography>
              )}
            </ErrorMessage>
            <ErrorMessage name="e_mail">
              {(msg) => (
                <Typography variant="body2" color="red" marginBottom="10px">
                  {msg}
                </Typography>
              )}
            </ErrorMessage>

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Zarejestruj się
            </Button>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
}

export default RegisterForm;
