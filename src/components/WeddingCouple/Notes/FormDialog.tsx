import { useState } from 'react';
import { Dialog, DialogActions, Button, DialogContent, TextField, Fab, DialogContentText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function FormDialog({ onSubmit }: { onSubmit: any }) {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState({
    title: '',
    details: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    onSubmit(note.title, note.details);
    setOpen(false);
  };

  return (
    <>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog maxWidth="sm" fullWidth={true} open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>Dodaj tytuł i treść notatki</DialogContentText>
          <TextField
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            autoFocus
            margin="dense"
            id="title"
            label="Tytuł"
            type="text"
            fullWidth
          />
          <TextField
            onChange={(e) => setNote({ ...note, details: e.target.value })}
            autoFocus
            multiline
            rows={4}
            margin="dense"
            id="details"
            label="Treść"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Anuluj
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Dodaj
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
