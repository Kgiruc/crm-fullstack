import { Box } from '@mui/system';
import { Typography } from '@mui/material';

function Logo() {
  return (
    <Box
      sx={{
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'space-around',
        width: 'auto',
        marginBottom: '31px',
      }}
    >
      <Typography className="heading-h6-purple logo">
        Blueberry
        <span style={{ color: 'white' }}> CRM</span>
      </Typography>
    </Box>
  );
}

export default Logo;
