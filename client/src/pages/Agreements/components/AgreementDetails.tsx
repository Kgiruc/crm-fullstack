import { Agreement } from '../../../models/agreement';
import { useAppSelector } from '../../../store/store';

function AgreementDetails({ id }: Agreement) {
  const details = useAppSelector((state) => state.details);
  console.log(details);
  return details.isOpen && id === details.agreement.id ? (
    <p>{details.agreement.name}</p>
  ) : null;
}

export default AgreementDetails;
