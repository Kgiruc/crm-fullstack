import { ErrorMessage, Field, Form, Formik } from "formik";
import { Agreement } from "../../../models/agreement"
import validationSchema from "../validations/formValidationsAgreement";

interface FormAgreementProps {
    buttonFunction: (values: Agreement) => void;
    initialAgreement: Agreement;
}

function FormAgreement({ buttonFunction, initialAgreement }: FormAgreementProps) {
  return (
    <Formik 
        initialValues={initialAgreement}
        validationSchema={validationSchema} 
        onSubmit={buttonFunction}
    >
    {({isValid}) => (
        <Form>
            <label>
            Name
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="p" />
          </label>
          <label>
            Date Sign
            <Field type="date" id="date_sing" name="date_sign" />
            <ErrorMessage name="date" component="p" />
          </label>
          <label>
            Date End
            <Field type="date" id="date_end" name="date_end" />
            <ErrorMessage name="date" component="p" />
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
    )
    }    
    </Formik>
  )
}

export default FormAgreement