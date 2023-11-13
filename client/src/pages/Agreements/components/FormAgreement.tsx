import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Box, Button, Container } from '@mui/material';
import { Agreement } from '../../../models/agreement';
import validationSchema from '../validations/formValidationsAgreement';
import { useCustomersQuery } from '../../Customers/services/customersApi';
import CustomField from '../../../components/CustomField';
import SelectCustomField from '../../../components/SelectCustomField';

interface FormAgreementProps {
  buttonFunction: (values: Agreement) => void;
  initialAgreement: Agreement;
}

function FormAgreement({
  buttonFunction,
  initialAgreement,
}: FormAgreementProps) {
  const {
    data: customers,
    isError,
    isLoading,
    isSuccess,
  } = useCustomersQuery();

  const customerOptions = customers
    ? customers.map((customer) => ({
        value: customer.id || '',
        label: `${customer.name} ${customer.surname}`,
      }))
    : [];

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
          initialValues={initialAgreement}
          validationSchema={validationSchema}
          onSubmit={buttonFunction}
        >
          {({ isValid }) => (
            <Form style={{ width: '100%', marginTop: 3 }}>
              <SelectCustomField
                name="customer_id"
                label="customer"
                isError={isError}
                isLoading={isLoading}
                isSuccess={isSuccess}
                options={customerOptions}
              />
              <Button
                component={Link}
                to="/customers/add"
                variant="contained"
                color="primary"
                sx={{ width: '100%', marginBottom: 3 }}
              >
                Dodaj nowego klienta
              </Button>
              <CustomField type="text" name="title" label="title" />
              <CustomField type="date" name="date_sign" label="data sign" />
              <CustomField type="date" name="date_end" label="data end" />
              <CustomField type="number" name="value" label="value" />
              <CustomField type="text" name="description" label="description" />
              <Button
                type="submit"
                disabled={!isValid}
                variant="contained"
                color="primary"
                sx={{ width: '100%' }}
              >
                Add Agreement
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default FormAgreement;
