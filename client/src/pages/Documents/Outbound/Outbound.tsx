import TablesLayout from '../../../components/TablesLayout';
import OutboundList from './components/OutboundList';
import { useOutboundQuery } from './services/outboundApi';

function Outbound() {
  const { data, error, isLoading, isFetching, isSuccess } = useOutboundQuery();
  return (
    <TablesLayout
      headers={['Wz_number', 'From', 'Actions']}
      filter={false}
      isLoading={isLoading}
      isFetching={isFetching}
      isSuccess={isSuccess}
      isError={error}
      title="All outbound documents"
      linkAdress="/documents/outbound/add"
      linkTitle="Add outbound"
    >
      {data && <OutboundList outbounds={data} />}
    </TablesLayout>
  );
}

export default Outbound;
