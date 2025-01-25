import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" py={3} textAlign="center" bgcolor="secondary.main" color="white">
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} <a href="#home">M. N. Kumar</a>. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
