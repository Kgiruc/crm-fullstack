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
        padding: '22px',
        gap: '12px',
      }}
    >
      <Logo />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <ListTab pages={[{ label: 'Dashboard', to: '/' }]} />
        <Typography className="heading-tabs-tabsColor">MANAGMENT</Typography>
        <ListTab
          pages={[
            { label: 'Analytics', to: '/analytics' },
            { label: 'Customers', to: '/customers' },
            { label: 'Products', to: '/products' },
            { label: 'Orders', to: '/orders' },
            { label: 'Invoices', to: '/invoices' },
          ]}
        />
        <Typography className="heading-tabs-tabsColor">PAGES</Typography>
        <ListTab
          pages={[
            { label: 'Authentication', to: '/authentication' },
            { label: 'Calendar', to: '/calendar' },
          ]}
        />
        <Typography className="heading-tabs-tabsColor">COMPONENTES</Typography>
        <ListTab pages={[{ label: 'Charts', to: '/Charts' }]} />
      </Box>
    </Box>
  );
}

export default AsideMenu;
