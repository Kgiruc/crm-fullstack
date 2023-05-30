import { useNavigate } from 'react-router-dom';
import { useAddCustomerMutation } from '../services/customersApi';
import FormCustomer from './FormCustomer';
import { Customer } from '../../../models/customer';

function AddCustomer() {
  const navigate = useNavigate();
  const [addCustomer] = useAddCustomerMutation();

  const initialCustomer: Customer = {
    name: '',
    surname: '',
    e_mail: '',
    phone_number: '',
    address: '',
    notes: '',
  };

  const AddHandler = async (values: Customer) => {
    await addCustomer(values);
    navigate('/customers');
  };
  return (
    <section>
      <FormCustomer
        buttonFunction={AddHandler}
        initialCustomer={initialCustomer}
      />
    </section>
  );
}

export default AddCustomer;
