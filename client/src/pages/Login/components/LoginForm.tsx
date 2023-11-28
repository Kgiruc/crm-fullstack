import { Form, Formik } from 'formik';
import { Box, Button, Container, Typography } from '@mui/material';
import { User } from '../../../models/login';
import validationSchema from '../validations/formValidationsLogin';
import CustomField from '../../../components/CustomField';

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
        <Typography
          // variant="h4"
          // sx={{ marginBottom: '20px' }}
          className="heading-h3-color-3"
        >
          Zaloguj się
        </Typography>
        <Formik
          initialValues={initialUser}
          onSubmit={buttonFunction}
          validationSchema={validationSchema}
        >
          <Form style={{ width: '100%', marginTop: 3 }}>
            <CustomField type="text" name="login" label="login" />
            <CustomField type="password" name="password" label="Password" />
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
