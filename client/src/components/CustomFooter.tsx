import { MenuItem, Select } from '@mui/material';
import { GridFooterContainer } from '@mui/x-data-grid';

interface CustomFooterProps {
  rows: string[];
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

function CustomFooter({
  rows,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: CustomFooterProps) {
  const pageSizes = [5, 10, 20];
  const rowCount = rows?.length || 0;

  return (
    <GridFooterContainer>
      <div style={{ flexGrow: 1 }}>
        Showing:
        <Select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
        >
          {pageSizes.map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>{' '}
        of {rowCount}
      </div>
      <div>
        {Array.from({ length: 4 }).map((_, index) => {
          const uniqueId = `page-${index + 1}`;
          return (
            <button
              key={uniqueId}
              type="button"
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </GridFooterContainer>
  );
}

export default CustomFooter;
