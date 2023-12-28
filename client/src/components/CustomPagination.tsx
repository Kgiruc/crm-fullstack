import { GridPagination } from '@mui/x-data-grid';
import Pagination from './Pagination';

function CustomPagination(props: any) {
  return <GridPagination ActionsComponent={Pagination} {...props} />;
}
export default CustomPagination;
