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
          <li>
            <button
              type="button"
              onClick={() => customer.id && deleteCustomer(customer.id)}
            >
              usuń
            </button>
          </li>
        </ul>
      ))}
    </>
  );
}

export default CustomerList;
