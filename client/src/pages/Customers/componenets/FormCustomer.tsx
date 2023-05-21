import { Customer } from '../../../models/customer';

interface FormCustomerProps {
  funcSet: React.Dispatch<React.SetStateAction<Customer>>;
  customer: Customer;
  buttonFunction: () => void;
}

function FormCustomer({
  funcSet,
  customer,
  buttonFunction,
}: FormCustomerProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    funcSet({
      ...customer,
      [event.target.name]: event.target.value,
    });
  };

  return (
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
      <button type="button" onClick={buttonFunction}>
        Add Client
      </button>
    </form>
  );
}

export default FormCustomer;
