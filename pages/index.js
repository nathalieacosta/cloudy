import { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import styles from "../styles/Index.module.css";

const Index = () => {
  return (
    <Fragment>
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
            <h2 className={styles.join}>register now. best of all, it's free forever!</h2>
          </Col>
        </Row>

        <Row>
          <Footer />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Index;
