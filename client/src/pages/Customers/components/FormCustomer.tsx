import { ErrorMessage, Field, Form, Formik } from 'formik';
import validationSchema from '../validations/formValidationsCustomers';
import { Customer } from '../../../models/customer';

interface FormCustomerProps {
  buttonFunction: (values: Customer) => void;
  initialCustomer: Customer;
}

function FormCustomer({ buttonFunction, initialCustomer }: FormCustomerProps) {
  return (
    <Formik
      initialValues={initialCustomer}
      validationSchema={validationSchema}
      onSubmit={buttonFunction}
    >
      {({ isValid }) => (
        <Form>
          <label>
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
