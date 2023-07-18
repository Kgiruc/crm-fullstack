import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { useAppSelector } from '../../store/store';
import ProfileButton from './components/ProfileButton';

function Home() {
  const isLogin = useAppSelector((state) => state.account.isLogin);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '240px',
        backgroundColor: '#f0f0f0',
        overflow: 'auto',
        margin: 0,
        padding: '0 16px',
        flex: 1,
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '16px' }}>
        CRM zmiana nazwy
      </Typography>

      <Button
        variant="contained"
        component={Link}
        to="/customers"
        sx={{ width: '100%', marginBottom: '8px' }}
      >
        Klienci
      </Button>

      <Button
        variant="contained"
        component={Link}
        to="/agreements"
        sx={{ width: '100%', marginBottom: '8px' }}
      >
        Umowy
      </Button>

      <Button
        variant="contained"
        component={Link}
        to="/invoices"
        sx={{ width: '100%', marginBottom: '8px' }}
      >
        Faktury
      </Button>

      <Button
        variant="contained"
        component={Link}
        to="/tasks"
        sx={{ width: '100%', marginBottom: '8px' }}
      >
        Zadania
      </Button>

      {isLogin ? (
        <Box sx={{ marginTop: 'auto', height: 'auto', textAlign: 'center' }}>
          <ProfileButton />
        </Box>
      ) : (
        <Box sx={{ width: '100%', marginTop: 'auto' }}>
          <Button sx={{ width: '100%', marginBottom: '8px' }}>
            <Link to="/login">Zaloguj się</Link>
          </Button>
          <Button sx={{ width: '100%' }}>
            <Link to="/register">Rejestracja</Link>
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Home;
