import { createTheme } from '@mui/material/styles';
import type {} from '@mui/lab/themeAugmentation';

declare module '@mui/material/styles' {
  interface Palette {
   tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

export const theme = createTheme({
    palette: {
      primary: {
        main: '#C26D6D',
        contrastText:'#fff' ,
        dark: '#B85C5C',
      },
      secondary: {
        main: '#FEC5BB',
        contrastText: '#fff',
        light: '#F8EDEB',
      },
      tertiary: {
        main: '#6F59C9',
        light:'#E7E2FF',
        contrastText: '#fff',
        dark: '#5A42B8'
      },
      success: {
        main: '#68B24E',
        contrastText: '#fff',
      },
      error: {
        main: '#FF1A4B',
        contrastText: '#fff',
      }
    },
    typography: {
      fontFamily: "'Abril Fatface'", 
      h1: {
        fontSize: '3.4rem',
        letterSpacing: '1px',
        WebkitFontSmoothing: "antialiased",
      },
      h2: {
        fontSize: '1.6rem',
        letterSpacing: '2px',
        fontWeight: 600
      },
      h3: {
        fontSize: '1.3rem',
        fontFamily: 'Poppins, sans-serif',
      },
      h4: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: "0.9rem",
        fontWeight: 400,
      },
      body1: {
        fontSize: '1rem',
        fontFamily:'Poppins, sans-serif',
        lineHeight:'1.6',
        letterSpacing: "1px",
      },
      body2: {
        fontSize: '0.9rem',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400
      },
      subtitle1: {
        fontSize: '1.1rem',
        fontFamily: 'Poppins, sans-serif',
        letterSpacing: '1px',
        fontWeight: 500,
      },
      caption: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
      },
      button: {
        textTransform: 'none',
        letterSpacing: '2px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        padding: '0.6rem 4rem',
      },
    }, 
    
}
);
