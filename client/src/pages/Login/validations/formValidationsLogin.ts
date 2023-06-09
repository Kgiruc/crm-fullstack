import * as Yup from 'yup';

const validationSchema = Yup.object({
  login: Yup.string().required('Podaj pełne imię'),
  password: Yup.string().required('Hasło nie może być puste'),
});

export default validationSchema;
