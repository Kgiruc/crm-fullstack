import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Podaj nazwe Umowy'),
    date: Yup.string().required('Podaj date rozpoczęcia lub podpisania umowy'),
    value: Yup.string()
    .required('Podaj kwotę umowy')
    .matches(/^\d+$/, 'Podaj poprawną kwotę')
});

export default validationSchema;