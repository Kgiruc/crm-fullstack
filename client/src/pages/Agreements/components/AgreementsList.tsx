import { Agreement } from '../../../models/agreement';
import { useDeleteAgreementMutation } from '../services/agreementsApi';

type Props = {
  agreements: Agreement[];
};

function AgreementsList({ agreements }: Props) {
  const [deleteAgreement] = useDeleteAgreementMutation();

  return (
    <tbody>
      {agreements.map((agreement) => (
        <tr key={agreement.id}>
          <td>{agreement.name}</td>
          <td>{agreement.surname}</td>
          <td>{agreement.title}</td>
          <td>{agreement.date_sign.toString()}</td>
          <td>{agreement.date_end.toString()}</td>
          <td>{agreement.value}</td>
          <td>{agreement.description}</td>
          <td>{agreement.updated_at}</td>
          <td>
            <button
              type="button"
              onClick={() => agreement.id && deleteAgreement(agreement.id)}
            >
              usuń
            </button>
          </td>
          <td>
            <button type="button">szczegóły</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default AgreementsList;
