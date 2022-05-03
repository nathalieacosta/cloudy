import { Container, Row, Col } from "react-bootstrap";
import { useSession, getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Statistics(props) {
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
            <h1>Statistics</h1>
          </Col>
        </Row>
        <Row>
          <Col>Total Amount of Journals: {props.totalJournals}</Col>
        </Row>
        <Row>
          <Col>Average Mood: {props.averageMood}</Col>
        </Row>
        <Row>
          <Col>
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
          }
      }
  }

  const journals = await prisma.journal.findMany({
    where: {
      id: session.user.id,
    },
  });

  let totalMood = 0;
  let totalJournals = 0;
  const moods = [];

  for (const element of journals) {
    totalMood += element.mood;
    moods.push({ mood: element.mood, total: element.mood });
    totalJournals++;
  }
  let averageMood = (totalMood / totalJournals).toFixed(3);

  return {
    props: { totalJournals, totalMood, averageMood, moods},
  };
}
