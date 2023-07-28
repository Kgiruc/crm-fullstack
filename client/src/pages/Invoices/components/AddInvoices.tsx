import { useNavigate } from 'react-router-dom';
import { Invoice } from '../../../models/invoice';
import FormInvoice from './FormInvoice';
import { useAddInvoiceMutation } from '../services/invoicesApi';
import FormLayout from '../../../components/FormLayout';

function AddInvoices() {
  const [addInvoice, { isError, isLoading }] = useAddInvoiceMutation();
  const navigate = useNavigate();

  const initialInvoice: Invoice = {
    customer_id: '',
    contract_id: '',
    date_issue: new Date().toISOString().slice(0, 10),
    date_due: new Date().toISOString().slice(0, 10),
    amount: 0,
    description: '',
    paid: false,
  };

  const AddHandler = async (values: Invoice) => {
    await addInvoice(values);
    navigate('/invoices');
  };
  return (
    <FormLayout isError={isError} isLoading={isLoading} login={false}>
      <FormInvoice
        buttonFunction={AddHandler}
        initialInvoice={initialInvoice}
      />
    </FormLayout>
  );
}

export default AddInvoices;
