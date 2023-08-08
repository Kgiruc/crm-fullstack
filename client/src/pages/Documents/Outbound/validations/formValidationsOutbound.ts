import * as Yup from 'yup';

const validationSchema = Yup.object({
  wz_number: Yup.string().required('Podaj numer'),
  delivery_date: Yup.string().required('Podaj date dostawy'),
  from_company: Yup.string().required('Podaj firme dostawcy'),
  from_street: Yup.string().required('Podaj ulice dostawcy'),
  from_postal_code: Yup.string().required('Podaj kod pocztowy dostawcy'),
  to_company: Yup.string().required('Podaj firme odbiorcy'),
  to_street: Yup.string().required('Podaj ulice odbiorcy'),
  to_postal_code: Yup.string().required('Podaj kod pocztowy odbiorcy'),
  to_city: Yup.string().required('Podaj ulice odbiorcy'),
  receiving_person: Yup.string().required('Podaj dostawce'),
  receiving_person_email: Yup.string()
    .required('Podaj pełny email')
    .email('Podaj poprawy mail'),
  receiving_person_phone: Yup.string()
    .required('Podaj pełny numer telefonu')
    .matches(/^\d+$/, 'Podaj poprawny numer telefonu'),
});

export default validationSchema;
