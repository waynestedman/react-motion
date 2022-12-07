import { createTheme } from "@mui/material/styles";
import tokens from './tokens.json';

const theme = createTheme({
  palette: {
    primary: {
      light: tokens.teal02,
      main: tokens.teal01,
      dark: tokens.dark
    },
    secondary: { 
      light: tokens.indigo02,
      main: tokens.indigo01
    },
    error: {
      main: tokens.error
    }
  },
});

export default theme;