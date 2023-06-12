import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Agreement } from '../../../models/agreement';
import validationSchema from '../validations/formValidationsAgreement';

interface FormAgreementProps {
  buttonFunction: (values: Agreement) => void;
  initialAgreement: Agreement;
}

function FormAgreement({
  buttonFunction,
  initialAgreement,
}: FormAgreementProps) {
  return (
    <Formik
      initialValues={initialAgreement}
      validationSchema={validationSchema}
      onSubmit={buttonFunction}
    >
      {({ isValid }) => (
        <Form>
          <label>
            customer ID
            <Field type="text" id="customer_id" name="customer_id" />
            <ErrorMessage name="customer_id" component="p" />
          </label>
          <label>
            Title
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" component="p" />
          </label>
          <label>
            Date Sign
            <Field type="date" id="date_sign" name="date_sign" />
            <ErrorMessage name="date_sign" component="p" />
          </label>
          <label>
            Date End
            <Field type="date" id="date_end" name="date_end" />
            <ErrorMessage name="date_end" component="p" />
          </label>
          <label>
            Value
            <Field type="number" id="value" name="value" />
            <ErrorMessage name="value" component="p" />
          </label>
          <label>
            Description
            <Field type="text" id="description" name="description" />
            <ErrorMessage name="description" component="p" />
          </label>
          <button type="submit" disabled={!isValid}>
            Add Agreement
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormAgreement;
