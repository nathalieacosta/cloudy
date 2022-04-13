import { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Login = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Login;
