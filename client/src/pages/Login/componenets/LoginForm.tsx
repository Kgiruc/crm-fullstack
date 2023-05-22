import { ErrorMessage, Field, Form, Formik } from 'formik';

function LoginForm() {
  return (
    <Formik>
      <Form>
        <label>
          Login:
          <Field type="text" id="login" name="login" />
          <ErrorMessage name="login" component="p" />
        </label>
        <label>
          Hasło:
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="p" />
        </label>
        <button type="submit">Zaloguj</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
