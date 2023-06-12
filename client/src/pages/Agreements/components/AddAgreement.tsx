import { useNavigate } from 'react-router-dom';
import { Agreement } from '../../../models/agreement';
import { useAddAgreementMutation } from '../services/agreementsApi';
import FormAgreement from './FormAgreement';

function AddAgreement() {
  const navigate = useNavigate();
  const [addAgreement] = useAddAgreementMutation();

  const initialAgreement: Agreement = {
    customer_id: '',
    title: '',
    date_sign: new Date().toISOString().slice(0, 10),
    date_end: new Date().toISOString().slice(0, 10),
    value: 0,
    description: '',
  };

  const AddHanndler = async (values: Agreement) => {
    await addAgreement(values);
    navigate('/agreements');
  };
  return (
    <section>
      <FormAgreement
        buttonFunction={AddHanndler}
        initialAgreement={initialAgreement}
      />
    </section>
  );
}

export default AddAgreement;
