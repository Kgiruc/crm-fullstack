import { TablePaginationProps } from '@mui/material';
import MuiPagination from '@mui/material/Pagination';
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
console.log(pageSize)
  return (
    <>
      <span>{`Showing: ${page + 1} of ${totalRows}`}</span>
      <select
        value={pageSize}
        onChange={(event) => {
          const newPageSize = parseInt(event.target.value, 10);
          apiRef.current?.setPageSize(newPageSize);
        }}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
      </select>
      <MuiPagination
        color="primary"
        className={className}
        count={pageCount}
        page={page + 1}
        onChange={(event, newPage) => {
          onPageChange(event as any, newPage - 1);
        }}
      />
    </>
  );
}
export default Pagination;
