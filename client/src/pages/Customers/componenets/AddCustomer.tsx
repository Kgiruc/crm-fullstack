import { useNavigate } from 'react-router-dom';
import { useAddCustomerMutation } from '../services/customersApi';

function AddCustomer() {
  const navigate = useNavigate();
  const [addCustomer] = useAddCustomerMutation();
  const customer = {
    name: 'Kamyk',
    surname: 'Krecik',
    e_mail: 'string32@gmail.com',
    phone_number: '452165321',
    address: 'ul.Podolskiego 32 Wrzesień',
  };
  const AddHandler = async () => {
    await addCustomer(customer);
    navigate('/customers');
  };
  return (
    <div>
      <button type="button" onClick={AddHandler}>
        Add Client
      </button>
    </div>
  );
}

export default AddCustomer;
