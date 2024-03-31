import { useNavigate } from 'react-router-dom';
import { useAddCustomerMutation } from '../services/customersApi';
import FormCustomer from './FormCustomer';
import { Customer } from '../../../models/customer';
import FormLayout from '../../../components/FormLayout';

function AddCustomer() {
  const navigate = useNavigate();
  const [addCustomer, { isError, isLoading }] = useAddCustomerMutation();

  const initialCustomer: Customer = {
    name: '',
    surname: '',
    e_mail: '',
    phone_number: '',
    address: '',
    bio: '',
    birthday: new Date().toISOString().slice(0, 10),
    company: '',
    country: '',
    gender: '',
    state: '',
    zipcode: '',
  };

  const AddHandler = async (values: Customer) => {
    await addCustomer(values);
    navigate('/customers');
  };
  return (
    <FormLayout isError={isError} isLoading={isLoading} login={false}>
      <FormCustomer
        buttonFunction={AddHandler}
        initialCustomer={initialCustomer}
      />
    </FormLayout>
  );
}

export default AddCustomer;
