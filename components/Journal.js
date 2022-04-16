import Card from "react-bootstrap/card";

const Journal = ({ title, mood, content }) => {
  return (
    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {mood}
          {content}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Journal;
