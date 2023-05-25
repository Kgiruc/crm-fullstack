import { ErrorMessage, Field, Form, Formik } from 'formik';
import validationSchema from '../../../common/formValidations';
import { User } from '../../../models/login';

interface FormUserProps {
  initialUser: User;
}
function LoginForm({ initialUser }: FormUserProps) {
  const handleSubmit = (values: User) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialUser}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
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
