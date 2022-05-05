import * as React from 'react';
import { Box, Button, Card, CardContent, Fade, styled, Typography } from "@mui/material";
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import { Checkbox } from '@material-ui/core';
import ChurchIcon from '@mui/icons-material/Church';




const SecondPopper = () => {
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
    <Box>
         <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Card style={{marginBottom:'1rem'}}>
                <CardContent style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Typography style={{padding:'0 2rem'}}>MAPA</Typography>
                </CardContent>
            </Card>
          </Fade>
        )}
      </Popper>
      <Button onClick={handleClick('right-start')}>{<Checkbox style={{color:'#6F59C9'}}/>}</Button>
    </Box>
  )
}

export default SecondPopper