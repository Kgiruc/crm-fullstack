import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Customer } from '../../../models/customer';

interface FormCustomerProps {
  buttonFunction: (values: Customer) => void;
  initialCustomer: Customer;
}

function FormCustomer({ buttonFunction, initialCustomer }: FormCustomerProps) {
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
  });

  return (
    <Formik
      initialValues={initialCustomer}
      validationSchema={validationSchema}
      onSubmit={buttonFunction}
    >
      {({ isValid }) => (
        <Form>
          <label htmlFor="name">
            name
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="p" />
          </label>
          <label>
            surname
            <Field type="text" id="surname" name="surname" />
            <ErrorMessage name="surname" component="p" />
          </label>
          <label>
            email
            <Field type="text" id="e_mail" name="e_mail" />
            <ErrorMessage name="e_mail" component="p" />
          </label>
          <label>
            phone number
            <Field
              type="text"
              id="phone_number"
              name="phone_number"
              placeholder="tylko cyfry np.880"
            />
            <ErrorMessage name="phone_number" component="p" />
          </label>
          <label>
            address
            <Field
              type="text"
              id="address"
              name="address"
              placeholder="ulica miasto kraj"
            />
            <ErrorMessage name="address" component="p" />
          </label>
          <label>
            notes
            <Field type="text" id="notes" name="notes" />
          </label>
          <button type="submit" disabled={!isValid}>
            Add Client
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormCustomer;
