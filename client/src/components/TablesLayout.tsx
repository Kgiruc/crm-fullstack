import {
  Typography,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  Button,
  Paper,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';

interface TablesLayoutProps {
  title: string;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean | FetchBaseQueryError | SerializedError | undefined;
  isSuccess: boolean;
  headers: string[];
  linkAdress: string;
  linkTitle: string;
  children: ReactNode;
  filter: boolean;
  filterFunction?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterPlaceHolder?: string;
  filterValue?: string;
}

function TablesLayout({
  title,
  isLoading,
  isFetching,
  isError,
  isSuccess,
  headers,
  linkAdress,
  linkTitle,
  children,
  filter,
  filterFunction,
  filterPlaceHolder,
  filterValue,
}: TablesLayoutProps) {
  return (
    <Box sx={{ margin: '24px 25px' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxHeight: '40px',
        }}
      >
        <Typography className="heading-h4-32-gray" sx={{ marginRight: 'auto' }}>
          {title}
        </Typography>

        {filter && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginLeft: 'auto',
            }}
          >
            <TextField
              value={filterValue}
              onChange={filterFunction}
              placeholder={filterPlaceHolder}
              className="table"
            />
          </Box>
        )}
        <Button
          component={Link}
          to={linkAdress}
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          sx={{ marginLeft: '22px', textTransform: 'capitalize' }}
        >
          {linkTitle}
        </Button>
      </Box>
      {isLoading && <p>loading...</p>}
      {isFetching && <p>fetching</p>}
      {isError && <p>error</p>}
      {isSuccess && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            {children}
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default TablesLayout;

TablesLayout.defaultProps = {
  filterFunction: undefined,
  filterPlaceHolder: undefined,
  filterValue: undefined,
};
