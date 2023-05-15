import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { getCustomersFetch } from './redux/slices/Customers';
import CustomerList from './componenets/CustomerList';

function Customers() {
  const customers = useAppSelector((state) => state.customers.customers);
  const isLoading = useAppSelector((state) => state.customers.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCustomersFetch());
  }, [dispatch]);

  return <div>{isLoading ? <p>loading...</p> : <CustomerList customers={customers} />}</div>;
}

export default Customers;
