import { Box,  Card, CardContent, Typography } from "@mui/material";

const FirstBranch = (props:{title:string, icon:React.ReactNode}) => {
  return (
    
                <Box display={'flex'}>
                    <Card style={{marginBottom:'1rem'}}>
                        <CardContent style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                            {props.icon}
                            <Typography style={{padding:'0 2rem'}}>{props.title}</Typography>
                        </CardContent>
                    </Card>
                </Box>
                
  )
}

export default FirstBranch