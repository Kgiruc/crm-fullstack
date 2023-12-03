import { AppBar, Toolbar, Typography } from '@mui/material';
import '../styles/menuBar.scss';

function MenuBar() {
  return (
    <AppBar position="static" className="menuBar">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Photos
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MenuBar;
