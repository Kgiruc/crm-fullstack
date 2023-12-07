import { Box } from '@mui/system';
import { Typography } from '@mui/material';

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
      <Typography className="heading-h6-color-3 logo">
        Blueberry
        <span style={{ color: 'white' }}> CRM</span>
      </Typography>
    </Box>
  );
}

export default Logo;
