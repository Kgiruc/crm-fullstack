import { DateTime } from 'luxon';
import TableBody from '@mui/material/TableBody/TableBody';
import TableRow from '@mui/material/TableRow/TableRow';
import TableCell from '@mui/material/TableCell/TableCell';
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
    <TableBody>
      {agreements.map((agreement) => (
        <TableRow
          key={agreement.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell>{agreement.name}</TableCell>
          <TableCell>{agreement.surname}</TableCell>
          <TableCell>{agreement.title}</TableCell>
          <TableCell>
            {DateTime.fromISO(agreement.date_sign).toISODate()}
          </TableCell>
          <TableCell>
            {DateTime.fromISO(agreement.date_end).toISODate()}
          </TableCell>
          <TableCell>{agreement.value}</TableCell>
          <TableCell>{agreement.description}</TableCell>
          {agreement.updated_at && (
            <TableCell>
              {new Date(agreement.updated_at).toLocaleString()}
            </TableCell>
          )}
          <TableCell>
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
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default AgreementsList;
