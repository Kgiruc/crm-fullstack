import { GridPagination } from '@mui/x-data-grid';
import Pagination from './Pagination';

function CustomPagination(props: any) {
  return (
    <GridPagination
      className=".pagination"
      ActionsComponent={Pagination}
      {...props}
    />
  );
}
export default CustomPagination;
