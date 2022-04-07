import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette: {
      primary: {
        main: '#C26D6D',
        contrastText: '#fff'
      },
      secondary: {
        main: '#FEC5BB',
        contrastText: '#fff',
      }
    },
    typography: {
      fontFamily: "'Abril Fatface'", 
      h1: {
        fontSize: '2.2rem',
      },
      h2: {
        fontSize: '1.8rem',
      },
      h3: {
        fontSize: '1.2rem',
        
      },
      h4: {
        fontFamily: "'Lato'",
        fontSize: "0.9rem",
        fontWeight: 400,
      },
      body1: {
        fontSize: '1.3rem',
        fontFamily:"'Lato'",
        fontWeight: 400,
      },
      button: {
        textTransform: 'none',
        letterSpacing: '1.2px',
        fontSize: '1rem',
        fontFamily: "'Lato"
      },
    },  
});