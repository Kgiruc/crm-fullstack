import { Link, useParams } from 'react-router-dom';
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
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
    <section>
      <h1>All Agreements</h1>
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
          <Link to="/agreements/add">Add Agreement</Link>
        </TableContainer>
      )}
    </section>
  );
}

export default Agreements;
