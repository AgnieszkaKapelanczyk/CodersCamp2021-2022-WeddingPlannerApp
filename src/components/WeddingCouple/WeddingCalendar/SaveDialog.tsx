import { DialogTitle, Dialog, DialogContent, DialogActions, Button, TextField, Typography  } from '@mui/material';
import {useForm, SubmitHandler} from 'react-hook-form';
import { GithubPicker } from 'react-color';
import { useState } from 'react';

const palette = [
    '#FF1A4B',
    '#68B24E',
    '#FEC5BB',
    '#C26D6D'
  ]

interface FormInput{
    title:string,
    backgroundColor:string
}


const SaveDialog= (props: { onClose: (arg0: boolean) => void; handleAdd: (arg0: FormInput) => void; open: boolean; }) => {

    const [color, setColor] = useState('')

    const handleClose = () =>{
        props.onClose(false)
        
    }

    const {register, handleSubmit} = useForm<FormInput>();

    const submitData:SubmitHandler<FormInput> = (data:FormInput)=>{
        props.handleAdd(data) 
    }
    
  return (
    <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>
        <Typography
                variant="h3"
                color="primary">
                Nowe wydarzenie
              </Typography></DialogTitle>
        <DialogContent>
            <form onSubmit={handleSubmit(submitData)}>
                <TextField {...register('title')} label='Treść' fullWidth={true}></TextField>
                <DialogActions>
                    <GithubPicker color={color} colors={palette} width={'102px'} onChange={(color)=>setColor(color.hex)}/>
                    <Button onClick={handleClose}>Zamknij</Button>
                    <Button type='submit'>Zapisz</Button>
                </DialogActions>
            </form>
        </DialogContent>

    </Dialog>
  )
}

export default SaveDialog