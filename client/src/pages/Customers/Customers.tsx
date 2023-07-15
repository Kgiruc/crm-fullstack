import { Link } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import { useCustomersQuery } from './services/customersApi';
import './styles/table.css';

function Customers() {
  const { data, error, isLoading, isFetching, isSuccess } = useCustomersQuery();
  return (
    <section>
      <h1>All Clients</h1>
      {isLoading && <p>loading...</p>}
      {isFetching && <p>fetching</p>}
      {error && <p>error</p>}
      {isSuccess && (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Notes</th>
                <th colSpan={3}>Actions</th>
              </tr>
            </thead>
            <CustomerList customers={data} />
          </table>
          <Link to="/customers/add">Add Customer</Link>
        </>
      )}
    </section>
  );
}

export default Customers;
