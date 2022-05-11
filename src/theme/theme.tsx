import { createTheme } from '@mui/material/styles';
import type {} from '@mui/lab/themeAugmentation';
import { plPL } from '@mui/material/locale';

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
        contrastText: '#fff'
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
        fontWeight: 500
      },
      h3: {
        fontSize: '1.3rem',
        fontFamily: "Lato",
      },
      h4: {
        fontFamily: "Lato",
        fontSize: "0.9rem",
        fontWeight: 400,
      },
      body1: {
        fontSize: '1rem',
        fontFamily:"Lato",
        lineHeight:'1.6',
        letterSpacing: "1px",
      },
      body2: {
        fontSize: '0.9rem',
        fontFamily:"Lato",
        fontWeight: 400
      },
      subtitle1: {
        fontSize: '1.1rem',
        fontFamily: "Lato",
        letterSpacing: '1px',
        fontWeight: 600,
      },
      button: {
        textTransform: 'none',
        letterSpacing: '2px',
        fontFamily: "Lato",
        fontWeight: 500,
        padding: '0.6rem 4rem',
      },
    }, 
    
}
);
