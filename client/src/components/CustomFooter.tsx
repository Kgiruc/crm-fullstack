import { MenuItem, Select } from '@mui/material';
import {
  GridFooterContainer,
  GridRowCount,
  useGridApiRef,
} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

interface CustomFooterProps {
  params: any;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  pagination: {
    rowCount: number;
  };
}

function CustomFooter({
  params,
  pagination,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: CustomFooterProps) {
  const pageSizes = [5, 10, 20];

  const apiRef = useGridApiRef();
  const [rowCount, setRowCount] = useState(0);

  useEffect(() => {
    setRowCount(apiRef.current.getRowsCount());
  }, [apiRef]);

  return (
    <GridFooterContainer sx={{ border: 'none' }}>
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
        {rowCount}
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
