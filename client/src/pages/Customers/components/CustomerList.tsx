import { Link } from 'react-router-dom';
import { Customer } from '../../../models/customer';
import { useDeleteCustomerMutation } from '../services/customersApi';

type Props = {
  customers: Customer[];
};

function CustomerList({ customers }: Props) {
  const [deleteCustomer] = useDeleteCustomerMutation();

  return (
    <tbody>
      {customers.map((customer) => (
        <tr key={customer.id}>
          <td>{customer.name}</td>
          <td>{customer.surname}</td>
          <td>{customer.e_mail}</td>
          <td>{customer.phone_number}</td>
          <td>{customer.address}</td>
          {customer.notes ? <td>{customer.notes}</td> : <td>-</td>}
          <td>
            <button
              type="button"
              onClick={() => customer.id && deleteCustomer(customer.id)}
            >
              usuń
            </button>
          </td>
          <td>
            <Link to={`/customers/update/${customer.id}`} state={customer}>
              Edit
            </Link>
          </td>
          <td>
            <Link to={`/agreements/${customer.id}`}>Umowy</Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default CustomerList;
