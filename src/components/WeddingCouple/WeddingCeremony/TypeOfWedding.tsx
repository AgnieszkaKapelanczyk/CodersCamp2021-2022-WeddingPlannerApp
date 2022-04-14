import EditIcon from '@mui/icons-material/Edit';
import { Box, Card, CardContent, CardHeader, IconButton, Typography, Divider, Collapse, styled, IconButtonProps } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import { useState } from 'react';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})
(({expand}:ExpandMoreProps) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)'
}));

const TypeOfWedding = () => {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{display:'flex', flexDirection:'column', marginTop:'2rem'}}>
      <CardHeader
         avatar={
          <EditIcon/>
        }
        action={
          <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        }
        title="Rodzaj ślubu"
      />
      <Divider/>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent style={{display:'flex', flexDirection:'column'}}>
        <Typography variant="body1" style={{marginLeft:'2rem'}}>Wybierz charakter uroczystości:</Typography>
        <Box display={'flex'} flexDirection={'row'} style={{marginLeft:'2rem'}}>
           <Checkbox/>
           <Card style={{maxWidth:'10rem'}}>
                <CardHeader
                    action={
                    <IconButton
                    aria-label="question"
                    >
                    <HelpOutlineIcon />
                    </IconButton>
                    }
                />
                <CardContent style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <LocalHospitalIcon/>
                    <Typography>KONKORDATOWY</Typography>
                </CardContent>
            </Card>    
        </Box>
        <Box display={'flex'} flexDirection={'row'} style={{marginLeft:'2rem'}}>
           <Checkbox/>
           <Card style={{maxWidth:'10rem'}}>
                <CardHeader
                    action={
                    <IconButton
                    aria-label="question"
                    >
                    <HelpOutlineIcon />
                    </IconButton>
                    }
                />
                <CardContent style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <EmojiFlagsIcon/>
                    <Typography>CYWILNY</Typography>
                </CardContent>
            </Card>    
        </Box>
      </CardContent>
      </Collapse>
    </Card>
  )
}

export default TypeOfWedding