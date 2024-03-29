import InvoicesList from './components/InvoicesList';
import { useInvoicesQuery } from './services/invoicesApi';
import TablesLayout from '../../components/TablesLayout';

function Invoices() {
  const { data, error, isLoading, isSuccess, isFetching } = useInvoicesQuery();
  return (
    <TablesLayout
      title="Invoices"
      isLoading={isLoading}
      isFetching={isFetching}
      isError={error}
      isSuccess={isSuccess}
      headers={[
        'Customer Name',
        'Customer Surname',
        'Title',
        'date issue',
        'date due',
        'amount',
        'description',
        'paid',
        'actions',
      ]}
      linkAdress="/invoices/add"
      linkTitle="Add Invoice"
      filter={false}
    >
      {data && <InvoicesList invoices={data} />}
    </TablesLayout>
  );
}

export default Invoices;
