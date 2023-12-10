import { Box } from '@mui/system';
import { Tab } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { TabContext, TabList } from '@mui/lab';
import Logo from './Logo';

function AsideMenu() {
  const location = useLocation();
  const pages = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/customers' },
  ];
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
      <TabContext value={location.pathname}>
        <TabList
          centered
          orientation="vertical"
          TabIndicatorProps={{
            style: {
              display: 'none',
            },
          }}
          className="tabMenu"
        >
          {pages.map((item) => (
            <Tab
              key={item.to}
              label={item.label}
              value={item.to}
              component={RouterLink}
              to={item.to}
              sx={{
                backgroundColor:
                  location.pathname === item.to ? 'white' : '#0C2556',
              }}
            />
          ))}
        </TabList>
      </TabContext>
    </Box>
  );
}

export default AsideMenu;