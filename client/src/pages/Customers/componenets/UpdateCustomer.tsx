import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUpdateCustomerMutation } from '../services/customersApi';
import FormCustomer from './FormCustomer';
import { Customer } from '../../../models/customer';

function UpdateCustomer() {
  const [updateCustomer] = useUpdateCustomerMutation();
  const location = useLocation();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id, name, surname, e_mail, phone_number, address, notes } =
    location.state as Customer;

  const [customer, setCustomer] = useState<Customer>({
    id,
    name,
    surname,
    e_mail,
    phone_number,
    address,
    notes,
  });

  const updateHandler = async () => {
    await updateCustomer(customer);
    navigate('/customers');
  };

  return (
    <div>
      <FormCustomer
        funcSet={setCustomer}
        customer={customer}
        buttonFunction={updateHandler}
      />
    </div>
  );
}

export default UpdateCustomer;
