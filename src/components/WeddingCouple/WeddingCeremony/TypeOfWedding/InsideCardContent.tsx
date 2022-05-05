import * as React from 'react';
import { Card, CardContent, CardHeader, IconButton, Typography, Box, styled, PopperPlacementType} from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Checkbox from '@mui/material/Checkbox';
import { ReactNode } from "react";
import FirstPopper from './FirstPopper';


const CssIconButton= styled(IconButton)(() => ({
  '& .MuiSvgIcon-root': {
    color:'#BAAAFB',
    fontSize:'2rem'
  },
}));



const InsideCardContent = ({title, children}:{title:string; children:ReactNode}) => {


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
          {children}
          <Typography>{title}</Typography>
        </CardContent>
      </Card> 
      <FirstPopper/>
    </Box>  
  )
}

export default InsideCardContent 
 