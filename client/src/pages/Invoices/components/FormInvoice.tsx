import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Invoice } from '../../../models/invoice';
import { useCustomersQuery } from '../../Customers/services/customersApi';
import { useAgreementsQuery } from '../../Agreements/services/agreementsApi';
import validationSchema from '../validations/formValidationsInvoices';

interface FormAgreementProps {
  buttonFunction: (values: Invoice) => void;
  initialInvoice: Invoice;
}

function FormInvoice({ buttonFunction, initialInvoice }: FormAgreementProps) {
  const { data: customers } = useCustomersQuery();
  const { data: contracts } = useAgreementsQuery();
  return (
    <Formik
      initialValues={initialInvoice}
      validationSchema={validationSchema}
      onSubmit={buttonFunction}
    >
      {({ isValid }) => (
        <Form>
          <label>
            customer
            <Field as="select" id="customer_id" name="customer_id">
              {initialInvoice.customer_id === '' && (
                <option value="">Select a customer</option>
              )}
              {customers &&
                customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name} {customer.surname}
                  </option>
                ))}
            </Field>
            <Link to="/customers/add">+</Link>
            <ErrorMessage name="customer_id" component="p" />
          </label>
          <label>
            contract
            <Field as="select" id="contract_id" name="contract_id">
              {contracts &&
                contracts.map((contract) => (
                  <option key={contract.id} value={contract.id}>
                    {contract.title} {contract.value}
                  </option>
                ))}
            </Field>
            <Link to="/agreements/add">+</Link>
            <ErrorMessage name="contract_id" component="p" />
          </label>
          <label>
            Date issue
            <Field type="date" id="date_issue" name="date_issue" />
            <ErrorMessage name="date_issue" component="p" />
          </label>
          <label>
            Date due
            <Field type="date" id="date_due" name="date_due" />
            <ErrorMessage name="date_due" component="p" />
          </label>
          <label>
            amount
            <Field type="number" id="amount" name="amount" />
            <ErrorMessage name="amount" component="p" />
          </label>
          <label>
            Description
            <Field type="text" id="description" name="description" />
            <ErrorMessage name="description" component="p" />
          </label>
          <label>
            Zapłacone
            <Field type="checkbox" id="paid" name="paid" />
          </label>
          <button type="submit" disabled={!isValid}>
            Add Agreement
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormInvoice;
