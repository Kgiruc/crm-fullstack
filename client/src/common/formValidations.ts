import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Podaj pełne imię'),
  surname: Yup.string().required('Podaj pełne nazwisko'),
  e_mail: Yup.string()
    .required('Podaj pełny email')
    .email('Podaj poprawy mail'),
  phone_number: Yup.string()
    .required('Podaj pełny numer telefonu')
    .matches(/^\d+$/, 'Podaj poprawny numer telefonu'),
  address: Yup.string().required('Podaj ulicę'),
  login: Yup.string().required('Podaj login'),
  password: Yup.string().required('złe hasło'),
});

export default validationSchema;
