import { useLocation, useNavigate } from 'react-router-dom';
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

  const initialCustomer: Customer = {
    id,
    name,
    surname,
    e_mail,
    phone_number,
    address,
    notes,
  };

  const updateHandler = async (values: Customer) => {
    await updateCustomer(values);
    navigate('/customers');
  };

  return (
    <main>
      <FormCustomer
        buttonFunction={updateHandler}
        initialCustomer={initialCustomer}
      />
    </main>
  );
}

export default UpdateCustomer;
