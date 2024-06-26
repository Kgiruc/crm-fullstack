import { useLocation, useNavigate } from 'react-router-dom';
import { useUpdateCustomerMutation } from '../services/customersApi';
import FormCustomer from './FormCustomer';
import { Customer } from '../../../models/customer';

function UpdateCustomer() {
  const [updateCustomer] = useUpdateCustomerMutation();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    id,
    name,
    surname,
    e_mail,
    phone_number,
    address,
    bio,
    gender,
    company,
    state,
    birthday,
    country,
  } = location.state as Customer;

  const initialCustomer: Customer = {
    id,
    name,
    surname,
    e_mail,
    phone_number,
    address,
    bio,
    country,
    gender,
    company,
    state,
    birthday,
    zipcode,
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
