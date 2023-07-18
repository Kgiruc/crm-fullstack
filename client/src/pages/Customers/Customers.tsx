import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import { useCustomersQuery } from './services/customersApi';
import './styles/table.css';
import { Customer } from '../../models/customer';

function Customers() {
  const { data, error, isLoading, isFetching, isSuccess } = useCustomersQuery();
  const [filter, setFilter] = useState('');

  const filteredCustomers =
    data &&
    data.filter((customer) =>
      customer.surname.toLowerCase().includes(filter.toLowerCase())
    );

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
  };

  return (
    <section>
      <h1>All Clients</h1>
      {isLoading && <p>loading...</p>}
      {isFetching && <p>fetching</p>}
      {error && <p>error</p>}
      {isSuccess && (
        <>
          <input
            value={filter}
            onChange={handleFilterChange}
            placeholder="wpisz nazwisko"
          />
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
            <CustomerList customers={filteredCustomers as Customer[]} />
          </table>
          <Link to="/customers/add">Add Customer</Link>
        </>
      )}
    </section>
  );
}

export default Customers;
