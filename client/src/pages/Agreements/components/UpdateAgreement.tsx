import { useNavigate } from 'react-router-dom';
import { Agreement } from '../../../models/agreement';
import { useUpdateAgreementMutation } from '../services/agreementsApi';
import FormAgreement from './FormAgreement';
import { useAppSelector } from '../../../store/store';

function UpdateAgreement() {
  const [updateAgreement] = useUpdateAgreementMutation();
  const agreement = useAppSelector((state) => state.details);
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id, customer_id, title, date_sign, date_end, value, description } =
    agreement.agreement as Agreement;

  const initialAgreement: Agreement = {
    id,
    customer_id,
    title,
    date_sign: date_sign?.slice(0, 10),
    date_end: date_end?.slice(0, 10),
    value,
    description,
  };

  const updateHandler = async (values: Agreement) => {
    await updateAgreement(values);
    navigate('/agreements');
  };
  return (
    <main>
      <FormAgreement
        buttonFunction={updateHandler}
        initialAgreement={initialAgreement}
      />
    </main>
  );
}

export default UpdateAgreement;
