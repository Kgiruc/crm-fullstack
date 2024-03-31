import { Form, Formik } from 'formik';
import { Button, Grid, TextField } from '@mui/material';
import validationSchema from '../validations/formValidationsCustomers';
import { Customer } from '../../../models/customer';
import CustomField from '../../../components/CustomField';
import CustomRadioField from '../../../components/CustomRadioField';
import SelectCustomField from '../../../components/SelectCustomField';
import countries from './Countries';

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
          <Grid container spacing={3} padding={2}>
            <Grid item xs={2}>
              <Button
                sx={{ height: '170px', width: '150px', background: 'red' }}
              />
            </Grid>
            <Grid item xs={5}>
              <CustomField type="text" name="name" label="name" />
              <CustomField type="text" name="surname" label="surname" />
              <CustomField type="date" name="birthday" label="" />
              <CustomField type="text" name="e_mail" label="email" />
              <SelectCustomField
                name="country"
                label="country"
                options={countries}
                isError={false}
                isLoading={false}
                isSuccess
              />
              <CustomField type="text" name="address" label="address" />
            </Grid>
            <Grid item xs={5}>
              <CustomRadioField
                title="gender"
                controls={[
                  { value: 'female', label: 'Female' },
                  { value: 'male', label: 'Male' },
                  { value: 'other', label: 'Other' },
                ]}
              />
              <CustomField type="text" name="company" label="company" />
              <CustomField
                type="text"
                name="phone_number"
                label="phone number"
              />
              <CustomField type="text" name="state" label="state/region" />
              <CustomField type="text" name="zipcode" label="zipcode" />
            </Grid>
            <Grid item xs={12} sx={{ justifyContent: 'flex-end' }}>
              <Grid container justifyContent="flex-end">
                <Grid item xs={10} sx={{ height: '200px' }}>
                  <TextField label="bio" multiline minRows={4} fullWidth />
                </Grid>
              </Grid>
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
