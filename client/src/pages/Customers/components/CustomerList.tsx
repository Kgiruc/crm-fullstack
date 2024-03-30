import { Link } from 'react-router-dom';
import {
  Button,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from 'react';
import { Customer } from '../../../models/customer';
import { useDeleteCustomerMutation } from '../services/customersApi';

type Props = {
  customers: Customer[];
};

function CustomerList({ customers }: Props) {
  const [deleteCustomer] = useDeleteCustomerMutation();

  return (
    <TableBody>
      {customers.map((customer) => (
        <React.Fragment key={customer.id}>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{customer.name}</TableCell>
            <TableCell>{customer.surname}</TableCell>
            <TableCell>{customer.e_mail}</TableCell>
            <TableCell>{customer.phone_number}</TableCell>
            <TableCell>{customer.address}</TableCell>
            <TableCell>{customer.bio ? customer.bio : '-'}</TableCell>
            <TableCell sx={{ display: 'flex', gap: '10px' }}>
              <IconButton
                onClick={() => customer.id && deleteCustomer(customer.id)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                component={Link}
                state={customer}
                to={`/customers/update/${customer.id}`}
              >
                <img src={Edit} alt="edit" />
              </IconButton>
              <Button
                component={Link}
                to={`/agreements/${customer.id}`}
                variant="contained"
                size="small"
                endIcon={<KeyboardArrowRightIcon />}
              >
                Umowy
              </Button>
            </TableCell>
          </TableRow>
        </React.Fragment>
      ))}
    </TableBody>
  );
}

export default CustomerList;
