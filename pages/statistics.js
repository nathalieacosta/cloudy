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
          <Col>
            Average Mood:
            {isNaN(props.averageMood) ? (
              <span>Create journals to see an average mood here!</span>
            ) : (
              <span> {props.averageMood}</span>
            )}
          </Col>
        </Row>
        <Row>
          <Col>Percent of Journals You Slept Enough: {props.percentSleep}%</Col>
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
  });

  let totalMood = 0;
  let sleptEnough = 0;
  let totalJournals = 0;

  for (const element of journals) {
    totalMood += element.mood;
    if (element.sleep > 0) {
      sleptEnough++;
    }
    totalJournals++;
  }
  let averageMood = (totalMood / totalJournals).toFixed(3);
  let percentSleep = (sleptEnough / totalJournals) * 100;

  return {
    props: { totalJournals, totalMood, averageMood, percentSleep },
  };
}
