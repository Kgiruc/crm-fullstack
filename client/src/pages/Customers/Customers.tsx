import { ChangeEvent, useState } from 'react';
import CustomerList from './components/CustomerList';
import { useCustomersQuery } from './services/customersApi';
import './styles/table.css';
import { Customer } from '../../models/customer';
import TablesLayout from '../../components/TablesLayout';
import CustomTable from '../../components/CustomTable';

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
    <TablesLayout
      title="All Clients"
      linkAdress="/customers/add"
      linkTitle="Add Client"
      filter
      filterFunction={handleFilterChange}
      filterPlaceHolder="wpisz nazwisko"
      filterValue={filter}
    >
      {data && <CustomerList customers={filteredCustomers as Customer[]} />}
      <CustomTable
        isLoading={isLoading}
        isFetching={isFetching}
        isError={error}
        isSuccess={isSuccess}
        rows={data}
      />
    </TablesLayout>
  );
}

export default Customers;
