import { Button, Card, CardContent, Typography } from '@mui/material'


const MapOfWedding = () => {
  return (
    <Card>
        <CardContent>
            <Typography>Dokończ zadanie:</Typography>
            <Typography>Ślub odbędzie się w:</Typography>
            <Typography>Wyszukaj i zaznacz na mapie:</Typography>
            <Button variant="contained" color='primary'>ZATWIERDŹ</Button>
        </CardContent>   
    </Card>
  )
}

export default MapOfWedding