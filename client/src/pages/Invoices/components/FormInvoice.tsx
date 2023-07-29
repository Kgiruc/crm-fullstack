import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { Invoice } from '../../../models/invoice';
import { useCustomersQuery } from '../../Customers/services/customersApi';
import { useAgreementsQuery } from '../../Agreements/services/agreementsApi';
import validationSchema from '../validations/formValidationsInvoices';
import CustomField from '../../../components/CustomField';
import SelectCustomField from '../../../components/SelectCustomField';

interface FormAgreementProps {
  buttonFunction: (values: Invoice) => void;
  initialInvoice: Invoice;
}

function FormInvoice({ buttonFunction, initialInvoice }: FormAgreementProps) {
  const {
    data: customers,
    isError: customersError,
    isLoading: customersLoading,
    isSuccess: customersSuccess,
  } = useCustomersQuery();
  const {
    data: contracts,
    isError,
    isLoading,
    isSuccess,
  } = useAgreementsQuery();
  const customerOptions = customers
    ? customers.map((customer) => ({
        value: customer.id || '',
        label: `${customer.name} ${customer.surname}`,
      }))
    : [];
  const contractsOptions = contracts
    ? contracts.map((contract) => ({
        value: contract.id || '',
        label: `${contract.title}`,
      }))
    : [];

  return (
    <Container>
      <Box>
        <Formik
          initialValues={initialInvoice}
          validationSchema={validationSchema}
          onSubmit={buttonFunction}
        >
          {({ isValid }) => (
            <Form style={{ width: '100%', marginTop: 3 }}>
              <SelectCustomField
                name="customer_id"
                label="customer"
                isError={customersError}
                isLoading={customersLoading}
                isSuccess={customersSuccess}
                options={customerOptions}
              />
              <Link to="/customers/add">+</Link>
              <SelectCustomField
                name="contract_id"
                label="contract"
                isError={isError}
                isLoading={isLoading}
                isSuccess={isSuccess}
                options={contractsOptions}
              />
              <Link to="/agreements/add">+</Link>
              <CustomField type="date" name="date_issue" label="Date issue" />
              <CustomField type="date" name="date_due" label="Date due" />
              <CustomField type="number" name="amount" label="amount" />
              <CustomField type="text" name="description" label="Description" />
              <CustomField type="checkbox" name="paid" label="Zapłacone" />
              <button type="submit" disabled={!isValid}>
                Add Agreement
              </button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default FormInvoice;
