import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#FAD264',
    },
    secondary: {
      main: '#67237E',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {

    button: {
      fontSize: 12,
      fontWeight: 600,
    },
  },

});

export default theme;
