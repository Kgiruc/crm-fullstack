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
        padding: '22px 0',
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
        <ListTab
          pages={[
            {
              label: 'Dashboard',
              to: '/',
              iconPath: 'src/assets/icons/home.svg',
            },
          ]}
        />
        <Typography className="heading-tabs-tabsColor" paddingLeft={3}>
          MANAGMENT
        </Typography>
        <ListTab
          pages={[
            {
              label: 'Analytics',
              to: '/analytics',
              iconPath: 'src/assets/icons/pie__chart.svg',
            },
            {
              label: 'Customers',
              to: '/customers',
              iconPath: 'src/assets/icons/customers.svg',
            },
            {
              label: 'Products',
              to: '/products',
              iconPath: 'src/assets/icons/pricetag.svg',
            },
            {
              label: 'Orders',
              to: '/orders',
              iconPath: 'src/assets/icons/shoppingcard.svg',
            },
            {
              label: 'Invoices',
              to: '/invoices',
              iconPath: 'src/assets/icons/invoices.svg',
            },
          ]}
        />
        <Typography className="heading-tabs-tabsColor" paddingLeft={3}>
          PAGES
        </Typography>
        <ListTab
          pages={[
            {
              label: 'Authentication',
              to: '/authentication',
              iconPath: 'src/assets/icons/lock.svg',
            },
            {
              label: 'Calendar',
              to: '/calendar',
              iconPath: 'src/assets/icons/calendar.svg',
            },
          ]}
        />
        <Typography className="heading-tabs-tabsColor" paddingLeft={3}>
          COMPONENTS
        </Typography>
        <ListTab
          pages={[
            {
              label: 'Charts',
              to: '/Charts',
              iconPath: 'src/assets/icons/chart.svg',
            },
          ]}
        />
      </Box>
    </Box>
  );
}

export default AsideMenu;
