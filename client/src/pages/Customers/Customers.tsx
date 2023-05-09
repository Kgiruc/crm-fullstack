import CustomerList from './componenets/CustomerList';
import useCustomers from './hooks/useCustomers';

function Customers() {
  const { customers, loading } = useCustomers();

  return <div>{loading ? <p>Loading...</p> : <CustomerList customers={customers} />}</div>;
}

export default Customers;
