import { Container, Row, Col } from "react-bootstrap";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import styles from "../styles/Index.module.css";

export default function Index() {
  return (
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col>
            <h1 className={styles.welcome}>feeling cloudy?</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className={styles.join}>
              join us today and track your mood over time
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className={styles.join}>
              sign in now. best of all, it's free forever!
            </h2>
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
  );
}
