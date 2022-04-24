import { Box, Typography } from "@mui/material";
import { theme } from "theme/theme";

const ComingSoon = () => {
    return(
        <Box 
            display={'flex'} 
            justifyContent={'center'} 
            alignItems={'center'} 
            style={{margin: '2rem', padding: '2rem', height: "50vh"}}>
            <Typography 
                variant="h1"
                sx={{
                    fontSize: '4rem',
                    letterSpacing: '6px',
                    border: '0.2rem solid #fff',
                    padding: '0.4em',
                    color: '#fff',
                    textShadow:
                      '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa'
                }}
            >Już wkrótce...</Typography>
        </Box>
    )
};

export default ComingSoon;