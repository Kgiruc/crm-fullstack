import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import Actions from './Actions';
import CustomFooter from './CustomFooter';

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
        <DataGrid
          rows={row}
          columns={columns}
          disableColumnFilter
          disableColumnMenu
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          slots={{
            footer: CustomFooter,
          }}
        />
      )}
    </>
  );
}

export default CustomTable;
