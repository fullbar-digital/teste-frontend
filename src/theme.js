import { createTheme } from '@mui/material/styles';
import './fonts/fonts.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
  typography: {
    fontFamily: 'Pokemon',
  },
});
export default theme;
