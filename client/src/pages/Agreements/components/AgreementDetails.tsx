import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';
import { Box, Button, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useAppSelector } from '../../../store/store';

interface AgreementDetailsProps {
  id: string;
}

function AgreementDetails({ id }: AgreementDetailsProps) {
  const details = useAppSelector((state) => state.details);
  return details.isOpen && id === details.agreement.id ? (
    <TableCell colSpan={9}>
      {details.isOpen && id === details.agreement.id && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {details.agreement.created_at && (
            <p>
              created at:{' '}
              {DateTime.fromISO(details.agreement.created_at).toFormat(
                'dd.MM.yyyy HH:mm'
              )}
            </p>
          )}
          <p>Adress: {details.agreement.address}</p>
          <p>Phone: {details.agreement.phone_number}</p>
          <p>descriotion: {details.agreement.description}</p>
          {details.agreement.id && (
            <Link to={`/agreements/update/${details.agreement.id}`}>
              <Button
                variant="text"
                size="small"
                startIcon={<EditIcon />}
                aria-label="Edit"
              >
                Edit
              </Button>
            </Link>
          )}
        </Box>
      )}
    </TableCell>
  ) : null;
}

export default AgreementDetails;
