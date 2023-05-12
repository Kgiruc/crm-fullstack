import { useState, useEffect } from 'react';
import { Customer } from '../../../types/customer';
import { useAppSelector, useAppDispath } from '../../../store/store';
import { getCustomersFetch } from '../redux/actions/actions';

const useCustomers = () => {
  const dispatch = useAppDispath();
  const customers = useAppSelector((state: { customers: Customer[] }) => state.customers);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getCustomersFetch());
  }, [dispatch]);

  useEffect(() => {
    if (customers.length > 0) {
      setLoading(false);
    }
  }, [customers]);

  return { customers, loading };
};

export default useCustomers;
