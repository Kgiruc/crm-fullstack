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
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
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
            <CustomField type="date" name="birthday" label="" />
            <CustomField type="text" name="e_mail" label="email" />
            <CustomField type="text" name="country" label="country" />
            <CustomField type="text" name="address" label="address" />
            <CustomField type="text" name="gender" label="gender" />
            <CustomField type="text" name="company" label="company" />
            <CustomField type="text" name="phone_number" label="phone number" />
            <CustomField type="text" name="state" label="state/region" />
            <CustomField type="text" name="zipcode" label="zipcode" />
            <CustomField type="text" name="bio" label="bio" />
            <button type="submit" disabled={!isValid}>
              Add Customer
            </button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default FormCustomer;
