import React from 'react';
import { Box, Typography, Stack, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './contact.css';

const Contact = () => {
  return (
    <Box sx={{ bgcolor: 'linear-gradient(135deg, #23234a 60%, #6a5acd 100%)', color: '#fff', py: 8, px: 2, minHeight: 400 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, letterSpacing: 1 }}>
        Contact
      </Typography>
      <Typography variant="h6" align="center" sx={{ mb: 4, color: '#bbb' }}>
        Feel free to reach out for collaborations or just a friendly hello!
      </Typography>
      <Stack justifyContent="center" alignItems="center">
        <Paper elevation={8} sx={{ bgcolor: '#23234a', p: 5, borderRadius: 4, minWidth: 320, maxWidth: 400, width: '100%' }}>
          <Stack spacing={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <EmailIcon sx={{ color: '#6a5acd', fontSize: 32 }} />
              <a href="mailto:matha.nandakumar@outlook.com" style={{ color: '#fff', fontSize: 18, textDecoration: 'none' }}>
                matha.nandakumar@outlook.com
              </a>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <PhoneIcon sx={{ color: '#6a5acd', fontSize: 32 }} />
              <Typography variant="body1" sx={{ color: '#fff', fontSize: 18 }}>
                +91-9493785134
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <LocationOnIcon sx={{ color: '#6a5acd', fontSize: 32 }} />
              <Typography variant="body1" sx={{ color: '#fff', fontSize: 18 }}>
                Muralinagar, Visakhapatnam, Andhra Pradesh, India
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
};

export default Contact;
