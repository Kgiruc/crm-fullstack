import TablesLayout from '../../components/TablesLayout';
import LinksDoc from './components/LinksDoc';
import WarehouseList from './components/WarehouseList';
import { useWarehouseItemsQuery } from './services/itemsApi';

function Warehouse() {
  const { data, error, isLoading, isFetching, isSuccess } =
    useWarehouseItemsQuery();
  return (
    <>
      <LinksDoc />
      <TablesLayout
        title="All items"
        isLoading={isLoading}
        isFetching={isFetching}
        isError={error}
        isSuccess={isSuccess}
        headers={[
          'Kod przedmiotu',
          'Nazwa przedmiotu',
          'Przydzielona ilość',
          'Jednostka miary',
          'Wydzielona ilość',
          'Cena jednostkowa',
          'Kod księgowy',
          'Syn. kod',
          'ilość',
        ]}
        linkAdress="/warehouse/add"
        linkTitle="Add item"
        filter={false}
      >
        {data && <WarehouseList warehouseItems={data} />}
      </TablesLayout>
    </>
  );
}

export default Warehouse;
