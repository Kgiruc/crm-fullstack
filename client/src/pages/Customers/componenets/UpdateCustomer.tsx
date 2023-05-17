import { useUpdateCustomerMutation } from '../services/customersApi';

function UpdateCustomer() {
  const [updateCustomer] = useUpdateCustomerMutation();

  const updateHandler = async () => {
    await updateCustomer(customerUpdate); // customerUpdate czyli pobieramy obiekt i go zmieniamy
  };
  return (
    <div>
      <button type="button" onClick={updateHandler}>
        Update
      </button>
    </div>
  );
}
