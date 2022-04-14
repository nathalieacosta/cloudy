import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import githubLogo from "../../public/githubLogo.png"

import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <Container className={styles.footer} fluid>
      <Row>
        <Col className={styles.links}>
          <a href="https://github.com/nathalieacosta/cloudy">
            <Image src={githubLogo} width={20} height={20}></Image>
          </a>
        </Col>
        <Col className={styles.nametag}>
          <a>made with ♡ by nathalie acosta</a>
        </Col>
        <Col className={styles.links}>
          <a href="mailto: nathalieacosta@college.harvard.edu">contact me</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
