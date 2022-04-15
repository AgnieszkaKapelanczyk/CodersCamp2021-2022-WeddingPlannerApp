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
        contrastText: '#fff'
      },
      secondary: {
        main: '#FEC5BB',
        contrastText: '#000',
      },
      tertiary: {
        main: '#6F59C9',
        light:'#E7E2FF',
      },
      success: {
        main: '#99D983'
      },
      error: {
        main: '#FF1A4B'
      }
    },
    typography: {
      fontFamily: "'Abril Fatface'", 
      h1: {
        fontSize: '2.5rem',
        letterSpacing: '1px',
        WebkitFontSmoothing: "antialiased",
      },
      h2: {
        fontSize: '1.8rem',
      },
      h3: {
        fontSize: '1.2rem',
        
      },
      h4: {
        fontFamily: "Lato",
        fontSize: "0.9rem",
        fontWeight: 400,
      },
      body1: {
        fontSize: '1rem',
        fontFamily:"Lato",
        fontWeight: 500,
        lineHeight:'1.4',
        letterSpacing: "1px"
      },
      body2: {
        fontSize: '0.9rem',
        fontFamily:"Lato",
        fontWeight: 400
      },
      button: {
        textTransform: 'none',
        letterSpacing: '1.2px',
        fontSize: '1rem',
        fontFamily: "Lato"
      },
    }, 
    components: {
      MuiTimeline: {
        styleOverrides: {
          root: {
            '&::before': {
              content: 'none',
            }
          },
        },
      },
    },
});
