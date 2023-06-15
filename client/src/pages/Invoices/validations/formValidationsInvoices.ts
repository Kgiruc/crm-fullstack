import * as Yup from 'yup';

const validationSchema = Yup.object({
  customer_id: Yup.string().required('Podaj klienta'),
  contract_id: Yup.string().required('Podaj umowe klienta'),
  date_issue: Yup.string().required('Podaj date rozpoczęcia umowy'),
  date_due: Yup.string().required('Podaj date podpisania umowy'),
  amount: Yup.number()
    .required('Podaj kwotę umowy')
    .positive('Podaj poprawną kwotę'),
});

export default validationSchema;
