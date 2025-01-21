import React from 'react';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';

const Contact = () => {
  return (
    <Box>
      <Typography variant="h3" justifyContent="center" gutterBottom>
      Let's work together!
      </Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
        <Box flex={1}>
          <Typography variant="h5" gutterBottom>
            Let's work together
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Message"
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
            />
            <Button variant="contained" color="primary" type="submit">
              Send
            </Button>
          </form>
        </Box>
        <Box flex={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography variant="body1">
            Email: matha.nandakumar@outlook.com
          </Typography>
          <Typography variant="body1">
            Phone: +91-9493785134
          </Typography>
          <Typography variant="body1">
            Address: Muralinagar, Visakhapatnam, Andhra Pradesh, India
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Contact;
