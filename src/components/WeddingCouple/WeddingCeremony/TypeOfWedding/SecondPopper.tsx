import * as React from 'react';
import { Box, Button, Card, CardContent, Fade, styled, TextField, Typography } from "@mui/material";
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import { Checkbox } from '@material-ui/core';
import ChurchIcon from '@mui/icons-material/Church';
import MapImg from '../../../../assets/img/mapa_sala.png';




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
              <CardContent style={{display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
                <Typography>Dokończ zadanie:</Typography>
                <Typography>Ślub odbędzie się w:</Typography>
                <TextField id="standard-basic" label="Restauracji Leśnej w Żurawinie" variant="standard" />
                <Typography>Wyszukaj i zaznacz na mapie:</Typography>
                <img src={MapImg} alt="" style={{height: '28px'}}/>
                <Button variant="contained" color='primary' style={{alignSelf:'center'}}>ZATWIERDŹ</Button>
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