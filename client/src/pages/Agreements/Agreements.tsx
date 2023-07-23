import { useParams } from 'react-router-dom';
import {
  useAgreementsQuery,
  useCustomerAgreementsQuery,
} from './services/agreementsApi';
import AgreementsList from './components/AgreementsList';
import TablesLayout from '../../components/TablesLayout';

function Agreements() {
  const { id } = useParams<{ id: string }>();
  const agreementsQuery = useAgreementsQuery();
  const customerAgreementsQuery = useCustomerAgreementsQuery(id || '');

  const { data, error, isLoading, isSuccess, isFetching } = id
    ? customerAgreementsQuery
    : agreementsQuery;
  return (
    <TablesLayout
      title="Agreements"
      isLoading={isLoading}
      isFetching={isFetching}
      isError={error}
      isSuccess={isSuccess}
      headers={[
        'Customer Name',
        'Customer Surname',
        'Agreement',
        'date sign',
        'date end',
        'value',
        'description',
        'update',
        'actions',
      ]}
      linkAdress="/agreements/add"
      linkTitle="Add Agreement"
    >
      {data && <AgreementsList agreements={data} />}
    </TablesLayout>
  );
}

export default Agreements;
