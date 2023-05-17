import { Link } from 'react-router-dom';
import CustomerList from './componenets/CustomerList';
import { useCustomersQuery } from './services/customersApi';

function Customers() {
  const { data, error, isLoading, isFetching, isSuccess } = useCustomersQuery();
  return (
    <div>
      <h1>czesc kolega</h1>
      {isLoading && <p>loading...</p>}
      {isFetching && <p>fetching</p>}
      {error && <p>error</p>}
      {isSuccess && <CustomerList customers={data} />}
      <Link to="/customers/add">dodaj klienta</Link>
    </div>
  );
}

export default Customers;
