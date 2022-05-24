import { Card, CardContent, CardHeader, IconButton, Typography, Box, styled} from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { ReactNode } from "react";
import FirstPopper from './FirstPopper';


const CssIconButton= styled(IconButton)(() => ({
  '& .MuiSvgIcon-root': {
    color:'#BAAAFB',
    fontSize:'2rem'
  },
}));



const InsideCardContent = (props:{title:string; icon:ReactNode, iconFirstPopperTop:ReactNode, iconFirstPopperBottom:ReactNode, titleTop:string, titleBottom:string}) => {


  return (
    <Box display={'flex'} style={{marginLeft:'2rem'}}>
      <Card style={{width:'13rem', height:'15rem', margin:'0 0 2rem 0'}}>
        <CardHeader
            style={{paddingBottom:'0rem'}}
            action={
                <CssIconButton
                aria-label="question"
                >
                <HelpOutlineIcon />
                </CssIconButton>
             }
        />
        <CardContent style={{display:'flex', flexDirection:'column', alignItems:'center', padding:'0rem'}}>
          {props.icon}
          <Typography>{props.title}</Typography>
        </CardContent>
      </Card> 
      <FirstPopper titleTop={props.titleTop} titleBottom={props.titleBottom} iconFirstPopperTop={props.iconFirstPopperTop} iconFirstPopperBottom={props.iconFirstPopperBottom}/>
    </Box>  
  )
}

export default InsideCardContent 
 