import EditIcon from '@mui/icons-material/Edit';
import { Box, Card, CardContent, CardHeader, IconButton, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';

const TypeOfWedding = () => {
  return (
    <Card style={{display:'flex', flexDirection:'column', marginTop:'2rem'}}>
      <CardHeader
         avatar={
          <EditIcon/>
        }
        action={
          <IconButton
          aria-label="show more"
          >
          <ExpandMoreIcon />
        </IconButton>
        }
        title="Rodzaj ślubu"
      />
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
    </Card>
  )
}

export default TypeOfWedding