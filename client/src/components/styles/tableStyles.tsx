import { createTheme } from '@mui/system';

const table = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: 'lightgray',
        },
        cell: {
          borderBottom: '1px solid #ccc',
        },
        row: {
          '&:hover': {
            backgroundColor: 'lightyellow',
          },
        },
        footer: {
          backgroundColor: 'lightgray',
        },
        columnHeader: {
          backgroundColor: 'gray',
          color: 'white',
          fontWeight: 'bold',
        },
      },
    },
  },
});

export default table;
