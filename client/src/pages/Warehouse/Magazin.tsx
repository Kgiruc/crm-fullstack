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
          'code',
          'name',
          'allcodete_q',
          'j.g',
          'issued_q',
          'unit_price',
          'account code',
          'syn code',
          'stock',
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
