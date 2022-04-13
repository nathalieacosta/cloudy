import { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <Navbar expand="lg">
        <Link href="/"><a className={styles.brand}>cloudy</a></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/"><a className={styles.link}>Home</a></Link>
            <Link href="/register"><a className={styles.link}>Register</a></Link>
            <Link href="/login"><a className={styles.link}>Login</a></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Header;
