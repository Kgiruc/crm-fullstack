import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Menu from '../../../assets/icons/menu.svg';
import Bell from '../../../assets/icons/bell.svg';
import Settings from '../../../assets/icons/settings-2.svg';
import Oval from '../../../assets/icons/Oval.svg';
import Avatar from '../../../assets/icons/Avatar.png';
import Chevron from '../../../assets/icons/chevron-down.svg';

function MenuBar() {
  return (
    <AppBar position="static" className="menuBar">
      <Toolbar className="toolBar">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <IconButton>
            <img src={Menu} alt="menu" />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton>
              <img src={Bell} alt="bell" />
            </IconButton>
            <IconButton>
              <img src={Settings} alt="settings" />
            </IconButton>
            <IconButton sx={{ marginRight: '26px' }}>
              <img src={Oval} alt="language" />
            </IconButton>
            <img src={Avatar} alt="avatar" />
            <Typography ml={1}>nazwa uzyt</Typography>
            <IconButton>
              <img src={Chevron} alt="button down" />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MenuBar;
