import { Link } from 'react-router-dom';
import { Customer } from '../../../models/customer';
import { useDeleteCustomerMutation } from '../services/customersApi';

type Props = {
  customers: Customer[];
};

function CustomerList({ customers }: Props) {
  const [deleteCustomer] = useDeleteCustomerMutation();

  return (
    <>
      {customers.map((customer) => (
        <ul key={customer.id}>
          <li>{customer.name}</li>
          <li>{customer.surname}</li>
          <li>{customer.e_mail}</li>
          <li>{customer.phone_number}</li>
          <li>{customer.address}</li>
          {customer.notes && <li>{customer.notes}</li>}
          <button
            type="button"
            onClick={() => customer.id && deleteCustomer(customer.id)}
          >
            usuń
          </button>
          <Link to={`/customers/update/${customer.id}`} state={customer}>
            Edit
          </Link>
        </ul>
      ))}
    </>
  );
}

export default CustomerList;
