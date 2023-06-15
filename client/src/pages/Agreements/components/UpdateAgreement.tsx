import { useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';
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
    date_sign: DateTime.fromISO(date_sign).toISODate() as string,
    date_end: DateTime.fromISO(date_end).toISODate() as string,
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
