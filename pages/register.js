import { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import RegisterForm from "../components/layout/RegisterForm";

const Register = () => {
    const userForm = {
        email: "",
        password: "",
    };
    
  return (
    <Fragment>
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
            <RegisterForm userForm={userForm}/>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Register;
