import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Logo from './Logo';
import ListTab from './ListTab';

function AsideMenu() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        height: '100vh',
        minWidth: '264px',
        backgroundColor: '#0C2556',
        overflow: 'auto',
        padding: '20px 0',
        alignItems: 'center',
      }}
    >
      <Logo />
      <ListTab pages={[{ label: 'Dashboard', to: '/dashboard' }]} />
      <Typography className="heading-tabs-tabsColor">MANAGMENT</Typography>
      <ListTab
        pages={[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about' },
          { label: 'Contact', to: '/customers' },
        ]}
      />
      <Typography className="heading-tabs-tabsColor">pages</Typography>
    </Box>
  );
}

export default AsideMenu;
