import { Link } from 'react-router-dom';
import { Invoice } from '../../../models/invoice';
import { useDeleteInvoiceMutation } from '../services/invoicesApi';

type Props = {
  invoices: Invoice[];
};

function InvoicesList({ invoices }: Props) {
  const [deleteInvoice] = useDeleteInvoiceMutation();

  return (
    <tbody>
      {invoices.map((invoice) => (
        <tr key={invoice.id}>
          <td>{invoice.name}</td>
          <td>{invoice.surname}</td>
          <td>{invoice.contract_title}</td>
          <td>{invoice.date_issue}</td>
          <td>{invoice.date_issue}</td>
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
            <Link to={`/customers/update/${invoice.id}`} state={invoice}>
              details
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default InvoicesList;
