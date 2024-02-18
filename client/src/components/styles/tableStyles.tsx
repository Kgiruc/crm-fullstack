import type {} from '@mui/x-data-grid/themeAugmentation';
import { createTheme } from '@mui/system';

const table = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          '& .MuiDataGrid-footer': {
            borderBottom: 'none', // Usunięcie borderu z footera
          },
        },
      },
    },
  },
});

export default table;
