import { useState, useEffect } from 'react';
import axios from 'axios';
import { Customer } from '../../../types/customer';

const useCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get('http://localhost:8800/clients')
      .then((response) => {
        console.log('dane:', response.data);
        setLoading(false);
        setCustomers(response.data);
      })
      .catch((error) => {
        console.log('Błąd pobierania danych: ', error);
        setLoading(false);
      });
  }, []);

  return { customers, loading };
};

export default useCustomers;
