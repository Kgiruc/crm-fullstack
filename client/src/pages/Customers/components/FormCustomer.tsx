import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Box, Container } from '@mui/material';
import validationSchema from '../validations/formValidationsCustomers';
import { Customer } from '../../../models/customer';
import CustomField from '../../../components/CustomField';

interface FormCustomerProps {
  buttonFunction: (values: Customer) => void;
  initialCustomer: Customer;
}

function FormCustomer({ buttonFunction, initialCustomer }: FormCustomerProps) {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 3,
        }}
      >
        <Formik
          initialValues={initialCustomer}
          validationSchema={validationSchema}
          onSubmit={buttonFunction}
        >
          {({ isValid }) => (
            <Form style={{ width: '100%', marginTop: 3 }}>
              {/* <label>
                name
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="p" />
              </label> */}
              <CustomField type="text" name="name" label="name" />
              {/* <label>
                surname
                <Field type="text" id="surname" name="surname" />
                <ErrorMessage name="surname" component="p" />
              </label> */}
              <CustomField type="text" name="surname" label="surname" />
              {/* <label>
                email
                <Field type="text" id="e_mail" name="e_mail" />
                <ErrorMessage name="e_mail" component="p" />
              </label> */}
              <CustomField type="text" name="e_mail" label="email" />
              {/* <label>
                phone number
                <Field
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  placeholder="tylko cyfry np.880"
                />
                <ErrorMessage name="phone_number" component="p" />
              </label> */}
              <CustomField
                type="text"
                name="phone_number"
                label="phone number"
              />
              {/* <label>
                address
                <Field
                  type="text"
                  id="address"
                  name="address"
                  placeholder="ulica miasto kraj"
                />
                <ErrorMessage name="address" component="p" />
              </label> */}
              <CustomField type="text" name="address" label="address" />
              {/* <label>
                notes
                <Field type="text" id="notes" name="notes" />
              </label> */}
              <CustomField type="text" name="notes" label="notes" />
              <button type="submit" disabled={!isValid}>
                Add Client
              </button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default FormCustomer;
