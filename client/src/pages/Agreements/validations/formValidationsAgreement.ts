import * as Yup from 'yup';

const validationSchema = Yup.object({
  customer_id: Yup.string().required('Podaj klienta'),
  title: Yup.string().required('Podaj nazwe Umowy'),
  date_sign: Yup.string().required('Podaj date rozpoczęcia umowy'),
  date_end: Yup.string().required('Podaj date podpisania umowy'),
  value: Yup.number()
    .required('Podaj kwotę umowy')
    .positive('Podaj poprawną kwotę'),
});

export default validationSchema;
