import { useNavigate } from 'react-router-dom';
import { useAddOutboundMutation } from '../services/outboundApi';
import { Outbound } from '../../../../models/outbound';
import FormLayout from '../../../../components/FormLayout';
import FormOutbound from './FormOutbound';

function AddOutbound() {
  const navigate = useNavigate();
  const [addOutbound, { isError, isLoading }] = useAddOutboundMutation();

  const initialOutbound: Outbound = {
    wz_number: '',
    delivery_date: new Date().toISOString().slice(0, 10),
    from_company: '',
    from_street: '',
    from_postal_code: '',
    from_city: '',
    to_company: '',
    to_street: '',
    to_postal_code: '',
    to_city: '',
    receiving_person: '',
    order_number: '',
    destination: '',
  };

  const AddHandler = async (values: Outbound) => {
    await addOutbound(values);
    navigate('/documents/outbound');
  };
  return (
    <FormLayout isError={isError} isLoading={isLoading} login={false}>
      <FormOutbound
        buttonFunction={AddHandler}
        initialOutbound={initialOutbound}
      />
    </FormLayout>
  );
}

export default AddOutbound;
