import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';
import { useAppSelector } from '../../../store/store';

interface AgreementDetailsProps {
  id: string;
}

function AgreementDetails({ id }: AgreementDetailsProps) {
  const details = useAppSelector((state) => state.details);
  return details.isOpen && id === details.agreement.id ? (
    <ul>
      {details.agreement.created_at && (
        <li>
          {DateTime.fromISO(details.agreement.created_at).toFormat(
            'dd.MM.yyyy HH:mm'
          )}
        </li>
      )}
      <li>{details.agreement.address}</li>
      <li>{details.agreement.phone_number}</li>
      <li>{details.agreement.description}</li>
      {details.agreement.id && (
        <Link to={`/agreements/update/${details.agreement.id}`}>Edit</Link>
      )}
    </ul>
  ) : null;
}

export default AgreementDetails;
