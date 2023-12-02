import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import LogoIcon from '../../../assets/icons/Logo.svg';

function Logo() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%',
      }}
    >
      <img src={LogoIcon} alt="logo" />
      <Typography className="heading-h6-color-3">
        Blueberry
        <span style={{ color: 'white' }}> CRM</span>
      </Typography>
    </Box>
  );
}

export default Logo;
