import RegisterForm from './components/RegisterForm';

function Register() {
  const initialUser: User = {
    login: '',
    email: '',
    password: '',
  };
  return (
    <section>
      <RegisterForm />
    </section>
  );
}

export default Register;
