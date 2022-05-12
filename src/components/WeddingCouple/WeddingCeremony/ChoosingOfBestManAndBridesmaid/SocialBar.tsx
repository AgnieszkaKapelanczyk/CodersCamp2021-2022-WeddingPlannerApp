import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import { Box, styled } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#6F59C9',
    color:  '#fff',
    fontSize: '0.7rem',
    fontFamily:'Lato',
    },
  }));

const SocialBar = () => {
  return (
    <Box style={{display:'flex'}}>
        <LightTooltip title="Bezglutenowe jedzenie"  placement="top">
    <IconButton 
        aria-label="social-bar" 
        style={{color: '#fff'}}
       >
            <InfoIcon style= {{fontSize: '0.8rem', borderRadius: '50%', background: '#6F59C9', padding:'0.4rem'}}/>
    </IconButton>
</LightTooltip>
<LightTooltip title="693-238-456" placement="top">
    <IconButton 
        aria-label="social-bar" 
        style={{color: '#fff'}}
        >
            <PhoneIcon style= {{fontSize: '0.8rem', borderRadius: '50%', background: '#6F59C9', padding:'0.4rem'}}/>
</IconButton> 
</LightTooltip>
<LightTooltip title="agakapa123@w.pl" placement="top">
    <IconButton 
        aria-label="social-bar" 
        style={{color: '#fff'}}
        >
            <MailOutlineIcon style= {{fontSize: '0.8rem', borderRadius: '50%', background: '#6F59C9', padding:'0.4rem'}}/>
    </IconButton>
</LightTooltip> 
<IconButton 
    aria-label="social-bar" 
    style={{color: '#fff'}}
    title='Edytuj'>
        <EditIcon style= {{fontSize: '0.8rem', borderRadius: '50%', background: '#6F59C9', padding:'0.4rem'}}/>
</IconButton> 
</Box>
  )
}

export default SocialBar