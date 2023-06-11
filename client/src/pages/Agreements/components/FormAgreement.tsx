import { ErrorMessage, Field, Form, Formik } from "formik";
import { Agreement } from "../../../models/agreement"

interface FormAgreementProps {
    buttonFunction: (values: Agreement) => void;
    initialAgreement: Agreement;
}

function FormAgreement({ buttonFunction, initialAgreement }: FormAgreementProps) {
  return (
    <Formik 
        initialValues={initialAgreement}
    //  validationSchema={} 
        onSubmit={buttonFunction}
    >
    {({isValid}) => (
        <Form>
             <label>
            name
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="p" />
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