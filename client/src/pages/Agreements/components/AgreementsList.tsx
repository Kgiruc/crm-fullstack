import { Agreement } from '../../../models/agreement';
import { useAppDispatch } from '../../../store/store';
import { useDeleteAgreementMutation } from '../services/agreementsApi';
import { detailsAgreement } from '../services/detailsSlice';
import AgreementDetails from './AgreementDetails';

type Props = {
  agreements: Agreement[];
};

function AgreementsList({ agreements }: Props) {
  const [deleteAgreement] = useDeleteAgreementMutation();
  const dispatch = useAppDispatch();

  return (
    <tbody>
      {agreements.map((agreement) => (
        <tr key={agreement.id}>
          <td>{agreement.name}</td>
          <td>{agreement.surname}</td>
          <td>{agreement.title}</td>
          {agreement.date_sign && (
            <td>{new Date(agreement.date_sign).toLocaleDateString()}</td>
          )}
          {agreement.date_end && (
            <td>{new Date(agreement.date_end).toLocaleDateString()}</td>
          )}
          <td>{agreement.value}</td>
          <td>{agreement.description}</td>
          {agreement.updated_at && (
            <td>{new Date(agreement.updated_at).toLocaleString()}</td>
          )}
          <td>
            <button
              type="button"
              onClick={() => agreement.id && deleteAgreement(agreement.id)}
            >
              usuń
            </button>

            <button
              type="button"
              onClick={() => dispatch(detailsAgreement({ agreement }))}
            >
              szczegóły
            </button>
            {agreement.id && <AgreementDetails id={agreement.id} />}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default AgreementsList;
