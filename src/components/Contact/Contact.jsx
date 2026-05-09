import React from 'react';
import { Box, Typography, Stack, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './contact.css';

const Contact = () => {
  return (
    <Box
      className="contact-section"
      sx={{
        color: '#fff',
        py: 8,
        px: 2,
        minHeight: 400,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="contact-ambient contact-ambient-a" aria-hidden />
      <div className="contact-ambient contact-ambient-b" aria-hidden />
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          letterSpacing: 1,
          position: 'relative',
          zIndex: 1,
          fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
          px: 1,
          wordBreak: 'break-word',
        }}
      >
        Contact
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{
          mb: 4,
          color: '#bbb',
          position: 'relative',
          zIndex: 1,
          px: { xs: 1.5, sm: 2 },
          wordBreak: 'break-word',
        }}
      >
        Feel free to reach out for collaborations or just a friendly hello!
      </Typography>
      <Stack justifyContent="center" alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
        <Paper
          elevation={8}
          className="contact-card-3d"
          sx={{
            bgcolor: 'rgba(35, 35, 74, 0.92)',
            p: { xs: 2.5, sm: 4, md: 5 },
            borderRadius: 4,
            minWidth: 0,
            width: '100%',
            maxWidth: 'min(400px, 100%)',
            border: '1px solid rgba(135, 80, 247, 0.35)',
            backdropFilter: 'blur(10px)',
            boxSizing: 'border-box',
          }}
        >
          <Stack spacing={{ xs: 3, sm: 4 }}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="flex-start"
              sx={{ minWidth: 0 }}
            >
              <EmailIcon sx={{ color: '#6a5acd', fontSize: 32, flexShrink: 0, mt: 0.25 }} />
              <Box sx={{ minWidth: 0, wordBreak: 'break-all', overflowWrap: 'anywhere' }}>
                <a
                  className="contact-email-link"
                  href="mailto:matha.nandakumar@outlook.com"
                >
                  matha.nandakumar@outlook.com
                </a>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ minWidth: 0 }}>
              <PhoneIcon sx={{ color: '#6a5acd', fontSize: 32, flexShrink: 0 }} />
              <Typography
                variant="body1"
                sx={{ color: '#fff', fontSize: 18, wordBreak: 'break-word', minWidth: 0 }}
              >
                +91-9493785134
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ minWidth: 0 }}>
              <LocationOnIcon sx={{ color: '#6a5acd', fontSize: 32, flexShrink: 0, mt: 0.25 }} />
              <Typography
                variant="body1"
                sx={{ color: '#fff', fontSize: 18, wordBreak: 'break-word', minWidth: 0 }}
              >
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
