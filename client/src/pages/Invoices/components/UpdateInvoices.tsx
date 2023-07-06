import { useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';
import { Invoice } from '../../../models/invoice';
import { useAppSelector } from '../../../store/store';
import { useUpdateInvoiceMutation } from '../services/invoicesApi';
import FormInvoice from './FormInvoice';

function UpdateInvoices() {
  const [updateInvoice] = useUpdateInvoiceMutation();
  const invoice = useAppSelector((state) => state.detailsInvoice);
  const navigate = useNavigate();

  const {
    id,
    customer_id,
    contract_id,
    date_issue,
    date_due,
    amount,
    description,
    paid,
  } = invoice.invoice as Invoice;

  const initialInvoice: Invoice = {
    id,
    customer_id,
    contract_id,
    date_issue: DateTime.fromISO(date_issue).toISODate() as string,
    date_due: DateTime.fromISO(date_due).toISODate() as string,
    amount,
    description,
    paid,
  };

  const updateHandler = async (values: Invoice) => {
    await updateInvoice(values);
    navigate('/invoices');
  };
  return (
    <section>
      <FormInvoice
        buttonFunction={updateHandler}
        initialInvoice={initialInvoice}
      />
    </section>
  );
}

export default UpdateInvoices;
