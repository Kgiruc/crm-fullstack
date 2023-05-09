import { Customer } from '../../../types/customer';

type Props = {
  customers: Customer[];
};

function CustomerList({ customers }: Props) {
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
        </ul>
      ))}
    </>
  );
}

export default CustomerList;
