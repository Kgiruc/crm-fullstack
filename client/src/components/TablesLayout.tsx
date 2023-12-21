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
  InputAdornment,
} from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';
import { positions, width } from '@mui/system';
import { relative } from 'path';
import SearchIcon from '../assets/icons/search.svg';
import AddIcon from '../assets/icons/add.svg';

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
    <Box sx={{ margin: '24px 25px', zIndex: '0', position: 'relative' }}>
      <Box
        sx={{
          width: 'calc(100% - 95px)',
          height: '85vh',
          background: '#fff',
          zIndex: '-1',
          position: 'absolute',
          right: 0,
          marginTop: '76px',
          borderRadius: '4px',
          boxShadow: '0px 5px 20px 0px rgba(176, 195, 211, 0.16)',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxHeight: '40px',
          marginBottom: '48px',
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
              maxHeight: '40px',
              maxWidth: '320px',
              '& input': {
                padding: '11px 16px',
                height: '18px',
                width: '320px',
              },
            }}
          >
            <TextField
              value={filterValue}
              onChange={filterFunction}
              placeholder={filterPlaceHolder}
              sx={{ backgroundColor: '#fff' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={SearchIcon} alt="search" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        )}
        <Button
          component={Link}
          to={linkAdress}
          variant="contained"
          color="primary"
          startIcon={<img src={AddIcon} alt="add" />}
          sx={{
            marginLeft: '22px',
            textTransform: 'capitalize',
            height: '40px',
            width: '170px',
          }}
        >
          {linkTitle}
        </Button>
      </Box>
      <Typography
        className="heading-h6-24-gray"
        sx={{ margin: '0 0 24px 24px' }}
      >
        Customers List
      </Typography>
      {isLoading && <p>loading...</p>}
      {isFetching && <p>fetching</p>}
      {isError && <p>error</p>}
      {isSuccess && (
        <TableContainer>
          <Table sx={{ backgroundColor: '#fff' }}>
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
