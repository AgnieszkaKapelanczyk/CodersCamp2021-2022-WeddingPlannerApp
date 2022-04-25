import { DialogTitle, Dialog, DialogContent, DialogActions, Button, TextField, Typography  } from '@mui/material';
import {useForm, SubmitHandler} from 'react-hook-form';

interface FormInput{
    title:string
}


const SaveDialog= (props: { onClose: (arg0: boolean) => void; handleAdd: (arg0: FormInput) => void; open: boolean; }) => {

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
                    <Button onClick={handleClose}>Zamknij</Button>
                    <Button type='submit'>Zapisz</Button>
                </DialogActions>
            </form>
        </DialogContent>

    </Dialog>
  )
}

export default SaveDialog