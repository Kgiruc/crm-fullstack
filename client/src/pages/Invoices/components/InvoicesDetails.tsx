import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/store';

interface InvoiceDetailsProps {
  id: string;
}

function InvoicesDetails({ id }: InvoiceDetailsProps) {
  const details = useAppSelector((state) => state.detailsInv);
  return details.isOpen && id === details.invoice.id ? (
    <ul>
      <li>{details.invoice.date_sign}</li>
      <li>{DateTime.fromISO(details.invoice.date_end).toISODate()}</li>
      <li>{details.invoice.description}</li>
      {details.invoice.id && (
        <Link to={`/invoices/update/${details.invoice.id}`}>Edit</Link>
      )}
    </ul>
  ) : null;
}

export default InvoicesDetails;
