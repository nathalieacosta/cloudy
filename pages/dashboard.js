import { Container, Row, Col } from "react-bootstrap";
import { useSession } from "next-auth/react";
import Link from "next/link";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import styles from "../styles/Dashboard.module.css";

export default function Dashboard() {
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
          <h1>Error: You must be signed in to view this page. Sign in by clicking the sign in button above.</h1>
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
          <Footer />
        </Row>
      </Container>
    );
  }
}