import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

interface CustomTableProps {
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean | FetchBaseQueryError | SerializedError | undefined;
  isSuccess: boolean;
}

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.name || ''} ${params.row.surname || ''}`,
  },
  { field: 'e_mail', headerName: 'Email' },
  {
    field: 'address',
    headerName: 'Location',
  },
  {
    field: 'phone_number',
    headerName: 'Phone',
    type: 'number',
  },
  {
    field: 'xxx',
    headerName: 'action',
    type: 'number',
  },
];

function CustomTable({
  isLoading,
  isFetching,
  isError,
  isSuccess,
  rows,
}: CustomTableProps) {
  return (
    <>
      {isLoading && <p>loading</p>}
      {isFetching && <p>fetvjing</p>}
      {isError && <p>error</p>}
      {isSuccess && (
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnFilter
          disableColumnMenu
          autoHeight
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      )}
    </>
  );
}

export default CustomTable;
