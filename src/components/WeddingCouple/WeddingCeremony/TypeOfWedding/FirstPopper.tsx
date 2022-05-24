import * as React from 'react';
import { Box, Button, Card, CardContent, Fade, styled, Typography } from "@mui/material";
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import { Checkbox } from '@material-ui/core';
import ChurchIcon from '@mui/icons-material/Church';
import SecondPopper from './SecondPopper';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'theme/theme';



const FirstPopper = (props:{titleTop:string, iconFirstPopperTop:React.ReactNode, titleBottom:string,iconFirstPopperBottom:React.ReactNode}) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState<PopperPlacementType>();
  
    const handleClick =
      (newPlacement: PopperPlacementType) =>
      (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
      };
  return (
    <ThemeProvider theme={theme}>
    <Box>
         <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box>
                <Box display={'flex'}>
                    <Card style={{marginBottom:'1rem'}}>
                        <CardContent style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                            {props.iconFirstPopperTop}
                            <Typography style={{padding:'0 2rem'}}>{props.titleTop}</Typography>
                        </CardContent>
                    </Card>
                    <SecondPopper/>
                </Box>
                <Box display={'flex'}>
                    <Card >
                        <CardContent style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                            {props.iconFirstPopperBottom} 
                            <Typography style={{padding:'0 2rem'}}>{props.titleBottom}</Typography>
                        </CardContent>
                    </Card>
                    <SecondPopper/>
                </Box> 
            </Box>
          </Fade>
        )}
      </Popper>
      <Button onClick={handleClick('right-start')}>{<Checkbox disabled={true} style={{color:'#6F59C9'}}/>}</Button>
    </Box>
    </ThemeProvider>
  )
}

export default FirstPopper