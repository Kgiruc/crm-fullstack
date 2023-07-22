import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h4">Page Not Found</Typography>
      <Button variant="contained" component={Link} to="/">
        Home
      </Button>
    </Box>
  );
}

export default NotFound;
