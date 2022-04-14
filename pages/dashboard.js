import { Container, Row, Col } from "react-bootstrap";
import { getSession, useSession } from "next-auth/react";
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
            <Link href={`/journals/add`}>Add</Link>
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