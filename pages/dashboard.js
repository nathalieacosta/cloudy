import { Container, Row, Col } from "react-bootstrap";
import { useSession, getSession } from "next-auth/react";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Journal from "../components/Journal";

import styles from "../styles/Dashboard.module.css";

export default function Dashboard(props) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const deleteJournal = async (journalId) => {
    const body = { journalId };
    try {
      await fetch("/api/journals", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

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
            <h1>
              Error: You must be signed in to view this page. Sign in by
              clicking the sign in button above.
            </h1>
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
            <button className={styles.add}>
              <Link href={"/add"}>Add</Link>
            </button>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            {props.journals.map((journal) => (
              <div key={journal.id}>
                <Journal
                  createdAt={journal.createdAt}
                  title={journal.title}
                  mood={journal.mood}
                  content={journal.content}
                />
                <button
                  className={styles.delete}
                  onClick={() => deleteJournal(journal.id)}
                >
                  Delete
                </button>
                <br></br>
              </div>
            ))}
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    );
  }
}

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  const journals = await prisma.journal.findMany({
    where: {
      user: session.user,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  for (const element of journals) {
    element.createdAt = element.createdAt.toString();
    element.createdAt =
      element.createdAt.split(" ")[1] +
      " " +
      element.createdAt.split(" ")[2] +
      ", " +
      element.createdAt.split(" ")[3];
  }
  return {
    props: { journals },
  };
}
