import TreeView from '@mui/lab/TreeView';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import TreeItem from '@mui/lab/TreeItem';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import ChurchIcon from '@mui/icons-material/Church';
import {ReactComponent as Cross} from '../../../../assets/icon/cross.svg';
import FirstBranch from './FirstBranch';
import SecondBranch from './SecondBranch';
import TreeRoot from './TreeRoot';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import {ReactComponent as CityHall} from '../../../../assets/icon/cityhall_89246.svg';

const Tree = () => {
  return (
    <TreeView
      aria-label="type of wedding"
      defaultCollapseIcon={<CheckBoxIcon style={{color:'#6F59C9', fontSize:'1.5rem'}}/>}
      defaultExpandIcon={<CheckBoxOutlineBlankIcon style={{color:'#6F59C9', fontSize:'1.5rem'}}/>} 
      sx={{ height: 740, flexGrow: 1, maxWidth: 250, overflowY: 'auto' }}
    >
      <TreeItem nodeId="1" label={<TreeRoot
          title="KONKORDATOWY" 
          icon={<Cross fill='#6F59C9' style={{width:'3rem', margin:'0 0 1rem 0'}}/>} 
          />}>
        <TreeItem nodeId="3" label={<FirstBranch title='W PLENERZE' icon={<NaturePeopleIcon style= {{fontSize: '5rem', color:'#6F59C9'}}/>}/>}>
            <TreeItem nodeId="5" label={<SecondBranch/> } />
        </TreeItem>
        <TreeItem nodeId="4" label={<FirstBranch title='W KOŚCIELE' icon={<ChurchIcon style= {{fontSize: '5rem', color:'#6F59C9'}}/> }/>}>
            <TreeItem nodeId="6" label={<SecondBranch/> } />
        </TreeItem>
      </TreeItem>
      <TreeItem nodeId="2" label={<TreeRoot
          title="CYWILNY" 
          icon={<EmojiFlagsIcon style= {{fontSize: '5rem', margin:'0 0 1rem 0', color:'#6F59C9'}}/>}
          />}>
        <TreeItem  color="#e8f0fe" nodeId="7" label={<FirstBranch title='W PLENERZE' icon={<NaturePeopleIcon style= {{fontSize: '5rem', color:'#6F59C9'}}/>}/>}>
            <TreeItem nodeId="9" label={<SecondBranch/> } />
        </TreeItem>
        <TreeItem nodeId="8" label={<FirstBranch title='W URZĘDZIE' icon={<CityHall fill='#6F59C9' style={{width:'4rem', margin:'0 0 1rem 0'}}/>}/>}>
            <TreeItem nodeId="10" label={<SecondBranch/> } />
        </TreeItem>
      </TreeItem>
    </TreeView>
  )
}

export default Tree