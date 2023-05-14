import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomersFetch } from './redux/states/Customers';

function Customers() {
  const customers = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomersFetch());
  }, [dispatch]);
  console.log(customers);

  return <div>Customers</div>;
}

export default Customers;
