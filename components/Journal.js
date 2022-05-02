import Card from "react-bootstrap/Card";

import styles from "../styles/Dashboard.module.css"

const Journal = ({ id, createdAt, title, mood, content }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{createdAt}</Card.Title>
        <Card.Subtitle>mood: {mood}</Card.Subtitle>
        <Card.Subtitle>title: {title}</Card.Subtitle>
        <Card.Text>notes: {content}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Journal;
