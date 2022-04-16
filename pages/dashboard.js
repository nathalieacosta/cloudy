import { Container, Row, Col } from "react-bootstrap";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Journal from "../components/Journal";

import styles from "../styles/Dashboard.module.css";

export default function Dashboard(props) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col>
            <h1>Loading...</h1>
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    );
  }
  if (status === "unauthenticated") {
    return (
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col>
            <h1>
              Error: You must be signed in to view this page. Sign in by
              clicking the sign in button above.
            </h1>
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    );
  }
  if (status === "authenticated") {
    return (
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col>
            <h1>Dashboard</h1>
            <p>Signed in as {session.user.name}</p>
            <button>
              <Link href={"/add"}>Add</Link>
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
            {
              <Journal title={props.journals.title} mood={props.journals.mood} content={props.journals.content} />
            }
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    );
  }
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/journals", {
    method: "GET",
  });
  const journals = await res.text();
  return {
    props: { journals },
  };
}
