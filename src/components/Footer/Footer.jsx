import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      py={3}
      textAlign="center"
      color="white"
      sx={{
        background: 'linear-gradient(180deg, #2a1454 0%, #1a0f38 100%)',
        borderTop: '1px solid rgba(135, 80, 247, 0.35)',
        boxShadow: '0 -12px 40px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} <a href="#home">M.N.Kumar</a>. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
