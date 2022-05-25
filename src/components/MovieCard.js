import { Card,Button } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
function MovieCard({movie}) {
  return (
    <Card style={{ width:'17rem'}}>
    <Card.Img variant="top" src={movie.posterUrl} height='350px'/>  
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
        {movie.description}
        
      </Card.Text>
      <Button variant="primary">Go Download</Button>
      <ReactStars
    count={5}
    value={movie.rate}
    size={24}
    activeColor="#ffd700"
  />
    </Card.Body>
  </Card>
  );
}

export default MovieCard;