import Card from "react-bootstrap/Card";

import styles from "../styles/Dashboard.module.css"

const Journal = ({ createdAt, title, mood, content, sleep }) => {
  return (
    <Card>
      <Card.Header>{createdAt}</Card.Header>
      <Card.Body>
        <Card.Subtitle>mood: {mood}</Card.Subtitle>
        <Card.Subtitle>title: {title}</Card.Subtitle>
        <Card.Subtitle>slept 8 or more hours: {sleep}</Card.Subtitle>
        <Card.Text>notes: {content}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Journal;
