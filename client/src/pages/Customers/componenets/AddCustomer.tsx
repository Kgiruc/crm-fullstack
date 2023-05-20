import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAddCustomerMutation } from '../services/customersApi';

function AddCustomer() {
  const navigate = useNavigate();
  const [addCustomer] = useAddCustomerMutation();

  const [customer, setCustomer] = useState({
    name: 'Kamyk',
    surname: 'Krecik',
    e_mail: 'string32@gmail.com',
    phone_number: '452165321',
    address: 'ul.Podolskiego 32 Wrzesień',
    notes: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCustomer({
      ...customer,
      [event.target.name]: event.target.value,
    });
  };

  const AddHandler = async () => {
    await addCustomer(customer);
    navigate('/customers');
  };
  return (
    <div>
      <form>
        <label htmlFor="name">
          name
          <input
            type="text"
            id="name"
            name="name"
            value={customer.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="surname">
          surname
          <input
            type="text"
            id="surname"
            name="surname"
            value={customer.surname}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="e_mail">
          email
          <input
            type="text"
            id="e_mail"
            name="e_mail"
            value={customer.e_mail}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="phone_number">
          phone number
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            value={customer.phone_number}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="address">
          address
          <input
            type="text"
            id="address"
            name="address"
            value={customer.address}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="notes">
          notes
          <input
            type="text"
            id="notes"
            name="notes"
            value={customer.notes}
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={AddHandler}>
          Add Client
        </button>
      </form>
    </div>
  );
}

export default AddCustomer;
