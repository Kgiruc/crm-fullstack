import { useAppSelector } from '../../../store/store';

function AgreementDetails() {
  const details = useAppSelector((state) => state.details);
  console.log(details);
  return details.isOpen ? <p>{details.agreement.name}</p> : <p>nie</p>;
}

export default AgreementDetails;
