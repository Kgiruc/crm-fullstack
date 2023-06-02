import { ErrorMessage, Field, Form, Formik } from 'formik';
import validationSchema from '../validations/formValidationsRegister';
import { User } from '../../../models/login';

interface FormRegisterProps {
  buttonFunction: (values: User) => void;
  initialUser: User;
}

function RegisterForm({ initialUser, buttonFunction }: FormRegisterProps) {
  return (
    <div>
      <h1>Rejestracja</h1>
      <Formik
        initialValues={initialUser}
        onSubmit={buttonFunction}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="login">Login</label>
          <Field type="text" id="login" name="login" />
          <ErrorMessage name="login" component="p" />
          <label htmlFor="e_mail">Email</label>
          <Field type="e_mail" id="e_mail" name="e_mail" />
          <ErrorMessage name="e_mail" component="p" />
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="p" />
          <button type="submit">Zarejestruj się</button>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterForm;
