import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';
import { TableCell } from '@mui/material';
import { useAppSelector } from '../../../store/store';

interface InvoiceDetailsProps {
  id: string;
}

function InvoicesDetails({ id }: InvoiceDetailsProps) {
  const details = useAppSelector((state) => state.detailsInvoice);
  return details.isOpen && id === details.invoice.id ? (
    <TableCell colSpan={9}>
      <ul>
        {details.invoice.date_sign && (
          <li>{DateTime.fromISO(details.invoice.date_sign).toISODate()}</li>
        )}
        {details.invoice.date_end && (
          <li>{DateTime.fromISO(details.invoice.date_end).toISODate()}</li>
        )}
        <li>{details.invoice.description}</li>
        {details.invoice.id && (
          <Link to={`/invoices/update/${details.invoice.id}`}>Edit</Link>
        )}
      </ul>
    </TableCell>
  ) : null;
}

export default InvoicesDetails;
