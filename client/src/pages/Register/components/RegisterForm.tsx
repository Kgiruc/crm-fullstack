import { Form, Formik } from 'formik';
import { Box, Button, Container, Typography } from '@mui/material';
import validationSchema from '../validations/formValidationsRegister';
import { User } from '../../../models/login';
import CustomField from '../../../components/CustomField';

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
            <CustomField type="text" name="login" label="login" />
            <CustomField type="e_mail" name="e_mail" label="email" />
            <CustomField type="password" name="password" label="password" />

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
