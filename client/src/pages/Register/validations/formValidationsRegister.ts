import * as Yup from 'yup';

const validationSchema = Yup.object({
  login: Yup.string().required('Podaj pełne imię'),
  e_mail: Yup.string()
    .required('Podaj pełny email')
    .email('Podaj poprawy mail'),
  password: Yup.string().required('Hasło nie może być puste'),
});

export default validationSchema;
