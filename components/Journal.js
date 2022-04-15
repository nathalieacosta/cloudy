import Card from "react-bootstrap";

const Journal = ({ journal }) => {
  return (
    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>{journal.title}</Card.Title>
        <Card.Text>
          <h5>{journal.mood}</h5>
          {journal.content}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};


export default Journal;