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
