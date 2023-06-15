import { DateTime } from 'luxon';
import { Invoice } from '../../../models/invoice';
import { useDeleteInvoiceMutation } from '../services/invoicesApi';
import InvoicesDetails from './InvoicesDetails';
import { useAppDispatch } from '../../../store/store';
import { detailsInvoice } from '../services/detailsInvSlice';

type Props = {
  invoices: Invoice[];
};

function InvoicesList({ invoices }: Props) {
  const [deleteInvoice] = useDeleteInvoiceMutation();
  const dispatch = useAppDispatch();

  return (
    <tbody>
      {invoices.map((invoice) => (
        <tr key={invoice.id}>
          <td>{invoice.name}</td>
          <td>{invoice.surname}</td>
          <td>{invoice.contract_title}</td>
          <td>{DateTime.fromISO(invoice.date_due).toISODate()}</td>
          <td>{DateTime.fromISO(invoice.date_issue).toISODate()}</td>
          <td>{invoice.amount}</td>
          <td>{invoice.description}</td>
          {invoice.paid ? <td>Zapłacone</td> : <td>nie zapłacone</td>}
          <td>
            <button
              type="button"
              onClick={() => invoice.id && deleteInvoice(invoice.id)}
            >
              usuń
            </button>
            <button
              type="button"
              onClick={() => dispatch(detailsInvoice({ invoice }))}
            >
              szczegóły
            </button>
            {invoice.id && <InvoicesDetails id={invoice.id} />}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default InvoicesList;
