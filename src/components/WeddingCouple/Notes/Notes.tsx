import { useState } from 'react';
import { Typography, Container, Grid, Box } from '@mui/material';
import CustomCard from './CustomCard';
import FormDialog from './FormDialog';
import { theme } from 'theme/theme';

const Notes = () => {
  const [notes, setNotes] = useState<any[]>([]);

  const handleAddNote = (title: any, details: any) => {
    const newNote = { id: Math.random(), title: title, details: details };
    const newNoteData = notes.concat(newNote);
    setNotes(newNoteData);
  };

  const handleDeleteNote = (id: any) => {
    const newNoteData = notes.filter((item) => item.id !== id);
    setNotes(newNoteData);
  };

  return (
    <>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '20rem',
          height: '4.5rem',
          backgroundColor: '#6F59C9',
          color: '#fff',
          borderRadius: '10px',
          marginTop: '5%',
          marginLeft: '15%',
          marginBottom: '1%',
          textTransform: 'uppercase',
          fontFamily: `${theme.typography.fontFamily}`,
        }}
      >
        <FormDialog onSubmit={handleAddNote} />
        <Typography variant="h3" color="secondary">
          Dodaj nową notatkę
        </Typography>
      </Box>
      <Container>
        <Grid container spacing={3}>
          {notes.length === 0 ? (
            <Box></Box>
          ) : (
            notes.map((item) => (
              <Grid item md={4} sm={6} xs={12} key={item.id}>
                <CustomCard item={item} onDelete={handleDeleteNote} />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Notes;
