import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/store';

interface AgreementDetailsProps {
  id: string | undefined;
}

function AgreementDetails({ id }: AgreementDetailsProps) {
  const details = useAppSelector((state) => state.details);
  return details.isOpen && id === details.agreement.id ? (
    <ul>
      <li>{details.agreement.created_at}</li>
      <li>{details.agreement.address}</li>
      <li>{details.agreement.phone_number}</li>
      <li>{details.agreement.description}</li>
      <Link to={`/agreements/update/${details.agreement.id}`}>Edit</Link>
    </ul>
  ) : null;
}

export default AgreementDetails;
