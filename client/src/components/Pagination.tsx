import { TablePaginationProps, Typography } from '@mui/material';
import MuiPagination from '@mui/material/Pagination';
import { Box } from '@mui/system';
import {
  gridPageCountSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';

function Pagination({
  page,
  onPageChange,
  className,
}: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const totalRows = apiRef.current?.getRowsCount() || 0;
  const pageSize = apiRef.current?.state.pagination.paginationModel.pageSize;

  return (
    <Box className="pagginationBox">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'unset',
        }}
      >
        <Typography className="heading-input-toolbarColor normal" mr={1}>
          Showing:
        </Typography>
        <select
          className="footerSelect"
          value={pageSize}
          onChange={(event) => {
            const newPageSize = parseInt(event.target.value as string, 10);
            apiRef.current?.setPageSize(newPageSize);
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
        </select>
        <Typography className="heading-input-toolbarColor normal" ml={1}>
          of {totalRows}
        </Typography>
      </Box>

      <MuiPagination
        color="primary"
        className={className}
        count={pageCount}
        page={page + 1}
        onChange={(e, newPage) => {
          onPageChange(
            e as React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
            newPage - 1
          );
        }}
      />
    </Box>
  );
}
export default Pagination;
