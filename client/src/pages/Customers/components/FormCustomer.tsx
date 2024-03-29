import { Form, Formik } from 'formik';
import { Box, Container, Grid } from '@mui/material';
import validationSchema from '../validations/formValidationsCustomers';
import { Customer } from '../../../models/customer';
import CustomField from '../../../components/CustomField';

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
        <Form style={{ width: '100%', marginTop: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CustomField type="text" name="name" label="name" />
              <CustomField type="text" name="surname" label="surname" />
              <CustomField type="date" name="birthday" label="" />
              <CustomField type="text" name="e_mail" label="email" />
              <CustomField type="text" name="country" label="country" />
              <CustomField type="text" name="address" label="address" />
              <CustomField type="text" name="gender" label="gender" />
            </Grid>
            <Grid item xs={6}>
              <CustomField type="text" name="company" label="company" />
              <CustomField
                type="text"
                name="phone_number"
                label="phone number"
              />
              <CustomField type="text" name="state" label="state/region" />
              <CustomField type="text" name="zipcode" label="zipcode" />
              <CustomField type="text" name="bio" label="bio" />
            </Grid>
          </Grid>
          <button type="submit" disabled={!isValid}>
            Add Customer
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormCustomer;
