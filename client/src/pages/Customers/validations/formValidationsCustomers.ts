import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Podaj pełne imię'),
  surname: Yup.string().required('Podaj pełne nazwisko'),
  avatar: Yup.string().required('brak zdjęcia'),
  e_mail: Yup.string()
    .required('Podaj pełny email')
    .email('Podaj poprawy mail'),
  phone_number: Yup.string()
    .required('Podaj pełny numer telefonu')
    .matches(/^\d+$/, 'Podaj poprawny numer telefonu'),
  address: Yup.string().required('Podaj ulicę'),
  country: Yup.string().required('Podaj kraj'),
  gender: Yup.string().required('Podaj płeć'),
  company: Yup.string().required('Podaj firmę'),
  state: Yup.string().required('Podaj stan zamieszkania'),
  zipcode: Yup.string().required('Podaj kod pocztowy'),
});

export default validationSchema;
