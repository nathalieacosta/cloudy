import { signIn, signOut, useSession } from "next-auth/react";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

import styles from "../../styles/Header.module.css";

const Header = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Navbar expand="lg">
        <Link href="/">
          <a className={styles.brand}>cloudy</a>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/">
              <a className={styles.link}>Home</a>
            </Link>
            <button className={styles.button}
              onClick={() =>
                signIn("google", { callbackUrl: "http://localhost:3000/dashboard" })
              }
            >
              Sign in
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  return (
    <Navbar expand="lg">
      <Link href="/">
        <a className={styles.brand}>cloudy</a>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link href="/">
            <a className={styles.link}>Home</a>
          </Link>
          <Link href="/dashboard">
            <a className={styles.link}>Dashboard</a>
          </Link>
          <button className={styles.button} onClick={() => signOut({ callbackUrl: "http://localhost:3000/"})}>Sign out</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
