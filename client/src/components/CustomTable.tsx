import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import { ThemeProvider } from '@mui/system';
import Actions from './Actions';
import CustomPagination from './CustomPagination';
import table from './styles/tableStyles';

interface CustomTableProps<T> {
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean | FetchBaseQueryError | SerializedError | undefined;
  isSuccess: boolean;
  row: readonly T[];
}

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.name || ''} ${params.row.surname || ''}`,
  },
  { field: 'e_mail', headerName: 'Email', flex: 1 },
  {
    field: 'address',
    headerName: 'Location',
    flex: 1,
  },
  {
    field: 'phone_number',
    headerName: 'Phone',
    type: 'number',
    flex: 1,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    type: 'actions',
    renderCell: (params: GridRenderCellParams) => <Actions row={params.row} />,
    flex: 1,
  },
];

function CustomTable<T>({
  isLoading,
  isFetching,
  isError,
  isSuccess,
  row,
}: CustomTableProps<T>) {
  return (
    <>
      {isLoading && <p>loading</p>}
      {isFetching && <p>fetching</p>}
      {isError && <p>error</p>}
      {isSuccess && (
        <ThemeProvider theme={table}>
          <DataGrid
            rows={row}
            columns={columns}
            disableColumnFilter
            disableColumnMenu
            pageSizeOptions={[5, 10]}
            pagination
            checkboxSelection
            rowCount={row.length}
            slots={{
              pagination: CustomPagination,
            }}
            initialState={{
              pagination: { paginationModel: { pageSize: 1 } },
            }}
          />
        </ThemeProvider>
      )}
    </>
  );
}

export default CustomTable;
