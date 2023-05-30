import { ErrorMessage, Field, Form, Formik } from 'formik';
import validationSchema from '../validations/formValidationsRegister';

function RegisterForm() {
  return (
    <div>
      <h1>Rejestracja</h1>
      <Formik initialValues={} onSubmit={} validationSchema={validationSchema}>
        <Form>
          <label htmlFor="login">Login</label>
          <Field type="text" id="login" name="login" />
          <ErrorMessage name="login" component="p" />
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="p" />
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
