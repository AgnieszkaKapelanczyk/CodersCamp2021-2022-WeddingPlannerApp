import { DialogTitle, Dialog, DialogContent, DialogActions, Button, TextField, Typography  } from '@mui/material';
import React from 'react';
import {useForm} from 'react-hook-form'

const SaveDialog = (props:any) => {

    const handleClose = () =>{
        props.onClose(false)
    }

    const {register, handleSubmit} = useForm();

    const handleData = (data:any)=>{
        const saveEvent = {...data, date_event:props.date}
        console.log(saveEvent)
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
            <form onSubmit={handleSubmit(handleData)}>
                <TextField {...register('content', { required: true })} label='Treść' fullWidth={true}></TextField>
                <DialogActions>
                    <Button onClick={handleClose}>Zamknij</Button>
                    <Button type='submit'>Zapisz</Button>
                </DialogActions>
            </form>
        </DialogContent>

    </Dialog>
  )
}

export default SaveDialog