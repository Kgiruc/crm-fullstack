import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomersFetch } from './redux/states/Customers';
import { Customer } from '../../types/customer';
import CustomerList from './componenets/CustomerList';

function Customers() {
  const customers = useSelector(
    (state: { customers: { customers: Customer[] } }) => state.customers.customers
  );
  const isLoading = useSelector((state: CustomerState) => state.customers.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomersFetch());
  }, [dispatch]);
  console.log(customers);

  return <div>{isLoading ? <p>loading...</p> : <CustomerList customers={customers} />}</div>;
}

export default Customers;
