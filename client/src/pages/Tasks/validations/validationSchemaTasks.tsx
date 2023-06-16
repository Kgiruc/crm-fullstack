import * as Yup from 'yup';

const validationSchema = Yup.object({
  title: Yup.string().required('Podaj Tytuł'),
  description: Yup.string().required('Podaj opis'),
  due_date: Yup.string().required('Podaj date końca zadania'),
  priority: Yup.number().required('Podaj priorytet od 1-3'),
  status: Yup.string().required('Podaj status zadania'),
});

export default validationSchema;
