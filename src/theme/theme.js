import { createTheme } from "@mui/material/styles";
import tokens from './tokens.json';

const theme = createTheme({
  palette: {
    primary: {
      light: tokens.teal02,
      main: tokens.teal01,
      dark: tokens.teal03,
    },
    secondary: { 
      light: tokens.indigo02,
      main: tokens.indigo01
    },
    error: {
      main: tokens.error
    }
  }, // palette
  typography: {
    fontFamily: 'var(--montserrat)',
    fontSize: 16,
    color: tokens.success,
    h1: {
      fontFamily: 'var(--raleway)',
      fontSize: 'var(--h1)',
      fontWeight: 'var(--bold)',
    },
    h2: {
      fontFamily: 'var(--raleway)',
      fontSize: 'var(--h2)',
      fontWeight: 'var(--semibold)',
    },
    h3: {
      fontFamily: 'var(--raleway)',
      fontSize: 'var(--h3)',
      fontWeight: 'var(--medium)',
    },
    a: {
      color: tokens.warning,
    }
  }, // typography
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          left: 0,
          right: 'unset',
          marginBottom: '1rem', 
          flexFlow: 'row nowrap',
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '0.5rem 2rem',
          color: 'var(--gray02)',
          backgroundColor: 'var(--indigo01)',
          width: '95vw',
          borderRadius: '0 var(--radius02) var(--radius02) 0',
        }
      }
    }
  }, // components
});

export default theme;