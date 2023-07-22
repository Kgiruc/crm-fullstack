import { Link, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
  useAgreementsQuery,
  useCustomerAgreementsQuery,
} from './services/agreementsApi';
import AgreementsList from './components/AgreementsList';

function Agreements() {
  const { id } = useParams<{ id: string }>();
  const agreementsQuery = useAgreementsQuery();
  const customerAgreementsQuery = useCustomerAgreementsQuery(id || '');

  const { data, error, isLoading, isSuccess, isFetching } = id
    ? customerAgreementsQuery
    : agreementsQuery;
  return (
    <Box sx={{ margin: '60px 20px' }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          marginBottom: '3vh',
          textTransform: 'uppercase',
          width: '100%',
        }}
      >
        Agreements
      </Typography>
      {isLoading && <p>loading...</p>}
      {isFetching && <p>fetching</p>}
      {error && <p>error</p>}
      {isSuccess && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Customer Name</TableCell>
                <TableCell>Customer Surname</TableCell>
                <TableCell>Agreement</TableCell>
                <TableCell>date sign</TableCell>
                <TableCell>date end</TableCell>
                <TableCell>value</TableCell>
                <TableCell>description</TableCell>
                <TableCell>update</TableCell>
                <TableCell>actions</TableCell>
              </TableRow>
            </TableHead>
            <AgreementsList agreements={data} />
          </Table>
          <Button
            component={Link}
            to="/agreements/add"
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{ margin: '12px' }}
          >
            Add Agreement
          </Button>
        </TableContainer>
      )}
    </Box>
  );
}

export default Agreements;
