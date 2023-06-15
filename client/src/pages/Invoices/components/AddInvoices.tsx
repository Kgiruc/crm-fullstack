import { useNavigate } from 'react-router-dom';
import { useAddInvoiceMutation } from '../services/invoicesApi';
import { Invoice } from '../../../models/invoice';
import FormInvoice from './FormInvoice';

function AddInvoices() {
  const [addInvoice] = useAddInvoiceMutation();
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
    <section>
      <FormInvoice
        buttonFunction={AddHandler}
        initialInvoice={initialInvoice}
      />
    </section>
  );
}

export default AddInvoices;
