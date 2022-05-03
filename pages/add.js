import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import styles from "../styles/Add.module.css";

export default function Add() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [mood, setMood] = useState(0);
  const [sleep, setSleep] = useState(true);
  const [content, setContent] = useState("");

  const submitJournal = async (event) => {
    event.preventDefault();
    try {
      const body = { title, mood, sleep, content };
      await fetch("/api/journals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <form onSubmit={submitJournal}>
          <Col className={styles.header}>
            <h1>How are you feeling today?</h1>
          </Col>
          <Col className={styles.input}>
            {" "}
            <input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              value={title}
              required
            />
          </Col>
          <Col className={styles.input}>
            <span>Mood: </span>
            <input
              onChange={(e) => setMood(e.target.value)}
              placeholder="5"
              type="number"
              min="0"
              max="10"
              value={mood}
              required
            />
          </Col>
          <Col className={styles.input}>
            <textarea
              cols={50}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Type out your thoughts here if you'd like.."
              rows={8}
              value={content}
            />
          </Col>
          <Col className={styles.input}>
            <span>Slept 8 or more hours?</span>
            <input onChange={() => setSleep(true)} type="radio" name="sleep" checked="checked"/>
            <label for="True">Yes</label>
            <input onChange={() => setSleep(false)} type="radio" name="sleep"/>
            <label for="False">No</label>
          </Col>
          <Col className={styles.input}>
           <input className={styles.submit} type="submit" value="Submit" />
          </Col>
        </form>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
