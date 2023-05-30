import { ErrorMessage, Field, Form, Formik } from 'formik';
import { User } from '../../../models/login';
import validationSchema from '../validations/formValidationsLogin';

interface FormUserProps {
  buttonFunction: (values: User) => void;
  initialUser: User;
}

function LoginForm({ initialUser, buttonFunction }: FormUserProps) {
  return (
    <div>
      <h1>Zaloguj się</h1>
      <Formik
        initialValues={initialUser}
        onSubmit={buttonFunction}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="login">Login</label>
          <Field type="text" id="login" name="login" />
          <ErrorMessage name="login" component="p" />
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="p" />
          <button type="submit">Zaloguj</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
