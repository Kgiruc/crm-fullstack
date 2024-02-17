import type {} from '@mui/x-data-grid/themeAugmentation';
import { createTheme } from '@mui/system';

const table = createTheme({
  components: {
    // Use `MuiDataGrid` on DataGrid, DataGridPro and DataGridPremium
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
        },
      },
    },
  },
});

export default table;