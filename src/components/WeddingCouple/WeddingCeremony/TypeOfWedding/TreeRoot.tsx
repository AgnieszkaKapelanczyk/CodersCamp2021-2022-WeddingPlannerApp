import { Card, CardContent, CardHeader, IconButton, styled, Typography } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { ReactNode } from 'react';

const CssIconButton= styled(IconButton)(() => ({
    '& .MuiSvgIcon-root': {
      color:'#BAAAFB',
      fontSize:'2rem'
    },
  }));
  

const TreeRoot = (props:{title:string; icon:ReactNode}) => {
  return (
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
  )
}

export default TreeRoot