import { Link } from 'react-router-dom';
import InvoicesList from './components/InvoicesList';
import { useInvoicesQuery } from './services/invoicesApi';

function Invoices() {
  const { data, error, isLoading, isSuccess } = useInvoicesQuery();
  return (
    <section>
      <h1>All invoices</h1>
      {isLoading && <p>loading</p>}
      {error && <p>wystąpił błąd</p>}
      {isSuccess && (
        <>
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Customer Surname</th>
                <th>Title</th>
                <th>date_issue</th>
                <th>date_due</th>
                <th>amount</th>
                <th>description</th>
                <th>paid</th>
                <th>actions</th>
              </tr>
            </thead>
            <InvoicesList invoices={data} />
          </table>
          <Link to="/invoices/add">Add Invoices</Link>
        </>
      )}
    </section>
  );
}

export default Invoices;
