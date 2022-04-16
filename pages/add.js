import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Add() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [mood, setMood] = useState(0);
  const [content, setContent] = useState("");

  const submitJournal = async (event) => {
    event.preventDefault();
    try {
      const body = { title, mood, content };
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
          <h1>How are you feeling today?</h1>
          <input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
            required
          />
          <input
            onChange={(e) => setMood(e.target.value)}
            placeholder="5"
            type="number"
            min="0"
            max="10"
            value={mood}
            required
          />
          <textarea
          cols={50}
          onChange={e => setContent(e.target.value)}
          placeholder="Type out your thoughts here if you'd like.."
          rows={8}
          value={content}
          />
          <input type="submit" value="Submit" />
        </form>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
