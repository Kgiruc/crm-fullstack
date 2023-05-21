import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAddCustomerMutation } from '../services/customersApi';
import FormCustomer from './FormCustomer';
import { Customer } from '../../../models/customer';

function AddCustomer() {
  const navigate = useNavigate();
  const [addCustomer] = useAddCustomerMutation();

  const [customer, setCustomer] = useState<Customer>({
    name: 'Kamyk',
    surname: 'Krecik',
    e_mail: 'string32@gmail.com',
    phone_number: '452165321',
    address: 'ul.Podolskiego 32 Wrzesień',
    notes: '',
  });

  const AddHandler = async () => {
    await addCustomer(customer);
    navigate('/customers');
  };
  return (
    <div>
      <FormCustomer
        funcSet={setCustomer}
        customer={customer}
        buttonFunction={AddHandler}
      />
    </div>
  );
}

export default AddCustomer;
