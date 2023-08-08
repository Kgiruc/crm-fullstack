import { Form, Formik } from 'formik';
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
              <CustomField type="text" name="name" label="name" />
              <CustomField type="text" name="surname" label="surname" />
              <CustomField type="text" name="e_mail" label="email" />
              <CustomField
                type="text"
                name="phone_number"
                label="phone number"
              />
              <CustomField type="text" name="address" label="address" />
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
