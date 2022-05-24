import { Box,  Card, CardContent, Typography }  from '@mui/material'
import { Tree, TreeNode } from 'react-organizational-chart';
import SecondPopper from './SecondPopper';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import './style.css'


const CssList = () => {
  return (
    <div className="container">
        <h1 className="level-1 rectangle">""</h1>
        <ol className="level-2-wrapper">
  <li>
    <h2 className="level-2 rectangle"><Box display={'flex'}>
                    <Card style={{marginBottom:'1rem'}}>
                        <CardContent style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                            <NaturePeopleIcon/>
                            <Typography style={{padding:'0 2rem'}}>kOŚCIELE</Typography>
                        </CardContent>
                    </Card>
                    <SecondPopper/>
                </Box></h2>
  </li>
  <li>
    <h2 className="level-2 rectangle"><Box display={'flex'}>
                    <Card style={{marginBottom:'1rem'}}>
                        <CardContent style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                            <NaturePeopleIcon/>
                            <Typography style={{padding:'0 2rem'}}>kOŚCIELE</Typography>
                        </CardContent>
                    </Card>
                    <SecondPopper/>
                </Box></h2>
  </li>
</ol>
        
    </div>
  )
}

export default CssList