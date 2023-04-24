import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./pestDictionaryCard.css";

const PestDictionaryCard = ({ name, image, description }) => {
    console.log(description)
  return (
    <Card className="ml-5 pl-5 pt-5" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{ width: 100, height: 100 }}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default PestDictionaryCard;