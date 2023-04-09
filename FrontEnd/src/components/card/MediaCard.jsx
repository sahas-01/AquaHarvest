import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './MediaCard.css'
import { Link } from "react-router-dom";

const MediaCard = ({ item }) => {
  return (
    <Card sx={{ minWidth: 345 }} className="card">  {/*change back to maxWidth */}
      <img
        src='https://cdn.britannica.com/05/88205-050-9EEA563C/Bigmouth-buffalo-fish.jpg'
        alt="fish"
        className="fish-image"
        width={300}
        height={170}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="overline" color="text.secondary" component="div">
          {item.location}
        </Typography>
        <Typography variant="overline" color="text.secondary" component="div">
          {item.price}
        </Typography>
        <Typography variant="overline" color="text.secondary" component="div">
          {item.contact}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/product" style={{ textDecoration: 'none' }}>
          <Button
            style={{ backgroundColor: "#D9D9D9", color: "black" }}
            size="medium" variant="contained">Buy Now</Button>
        </Link>
      </CardActions>

    </Card>
  );
}

export default MediaCard;
