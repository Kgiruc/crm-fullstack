import { Container, TablePaginationProps, Typography } from '@mui/material';
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
        <Typography>Showing: </Typography>{' '}
        <select
          className="footerSelect"
          value={pageSize}
          onChange={(event) => {
            const newPageSize = parseInt(event.target.value, 10);
            apiRef.current?.setPageSize(newPageSize);
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
        </select>{' '}
        of {totalRows}
      </Box>

      <MuiPagination
        color="primary"
        className={className}
        count={pageCount}
        page={page + 1}
        onChange={(event, newPage) => {
          onPageChange(event as any, newPage - 1);
        }}
      />
    </Box>
  );
}
export default Pagination;
