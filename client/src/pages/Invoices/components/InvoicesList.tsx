import { DateTime } from 'luxon';
import { IconButton, TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Invoice } from '../../../models/invoice';
import { useDeleteInvoiceMutation } from '../services/invoicesApi';
import InvoicesDetails from './InvoicesDetails';
import { useAppDispatch } from '../../../store/store';
import { detailsInvoice } from '../services/detailsInvoiceSlice';

type Props = {
  invoices: Invoice[];
};

function InvoicesList({ invoices }: Props) {
  const [deleteInvoice] = useDeleteInvoiceMutation();
  const dispatch = useAppDispatch();

  return (
    <TableBody>
      {invoices.map((invoice) => (
        <React.Fragment key={invoice.id}>
          <TableRow
            sx={{ '&:last-child TableCell, &:last-child th': { border: 0 } }}
          >
            <TableCell>{invoice.name}</TableCell>
            <TableCell>{invoice.surname}</TableCell>
            <TableCell>{invoice.contract_title}</TableCell>
            <TableCell>
              {DateTime.fromISO(invoice.date_due).toISODate()}
            </TableCell>
            <TableCell>
              {DateTime.fromISO(invoice.date_issue).toISODate()}
            </TableCell>
            <TableCell>{invoice.amount}</TableCell>
            <TableCell>{invoice.description}</TableCell>
            {invoice.paid ? (
              <TableCell>Zapłacone</TableCell>
            ) : (
              <TableCell>nie zapłacone</TableCell>
            )}
            <TableCell>
              <IconButton
                onClick={() => invoice.id && deleteInvoice(invoice.id)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={() => dispatch(detailsInvoice({ invoice }))}>
                <MoreHorizIcon />
              </IconButton>
            </TableCell>
          </TableRow>
          {invoice.id && (
            <TableRow>
              <InvoicesDetails id={invoice.id} />
            </TableRow>
          )}
        </React.Fragment>
      ))}
    </TableBody>
  );
}

export default InvoicesList;
