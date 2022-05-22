import { Card, CardActionArea, CardContent, Typography, CardActions, Button } from '@mui/material';

const CustomCard = ({ item, onDelete }: { item: any; onDelete: any }) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5">{item.title}</Typography>
          <Typography variant="body2">{item.details}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => onDelete(item.id)} variant="contained">
          Usuń
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
