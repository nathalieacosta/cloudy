import { signIn, signOut, useSession } from "next-auth/react";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

import styles from "../../styles/Header.module.css";

const Header = () => {
  const { data: session } = useSession();

  async function login(event) {
    event.preventDefault();
    await signIn("google", { callbackUrl: "http://localhost:3000/dashboard" });
  }

  async function logout(event) {
    event.preventDefault();
    await signOut({ callbackUrl: "http://localhost:3000/" });
  }

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
            <button className={styles.button} onClick={login}>
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
          <button className={styles.button} onClick={logout}>
            Sign out
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
