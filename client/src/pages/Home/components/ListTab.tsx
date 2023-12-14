import { TabContext, TabList } from '@mui/lab';
import { Tab } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';

type Page = {
  label: string;
  to: string;
};

type ListTabProps = {
  pages: Page[];
};

function ListTab({ pages }: ListTabProps) {
  const location = useLocation();
  return (
    <TabContext value={location.pathname}>
      <TabList
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
                location.pathname === item.to ? '#0F2E69;' : '#0C2556',
              opacity: location.pathname === item.to ? '1' : '0.6',
              color: 'fff',
            }}
            className="list"
          />
        ))}
      </TabList>
    </TabContext>
  );
}

export default ListTab;
