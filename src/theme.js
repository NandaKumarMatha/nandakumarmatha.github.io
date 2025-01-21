import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#2a1454',
      paper: '#424242',
    },
    primary: {
      main: '#8750f7',
    },
    secondary: {
      main: '#2a1454',
    },
    text: {
      primary: '#ddd',
    },
  },
});

export default theme;
