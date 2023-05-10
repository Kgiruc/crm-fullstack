import axios from 'axios';
import { useState } from 'react';
import newCustomer from '../componenets/newCustomer';

const useAddCustomer = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const addCustomer = async () => {
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await axios.post('http://localhost:8800/clients', {
        newCustomer,
      });
      setSuccess(true);
    } catch (err) {
      setError(` ${err} `);
    }
  };
  return { addCustomer, loading, error, success };
};

export default useAddCustomer;
