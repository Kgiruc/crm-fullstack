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
import SearchIcon from '@mui/icons-material/Search';
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
        {title}
      </Typography>
      {filter && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 2,
            alignItems: 'center',
          }}
        >
          <SearchIcon sx={{ mr: 1 }} />
          <TextField
            value={filterValue}
            onChange={filterFunction}
            placeholder={filterPlaceHolder}
          />
        </Box>
      )}
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
          <Button
            component={Link}
            to={linkAdress}
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{ margin: '12px' }}
          >
            {linkTitle}
          </Button>
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
