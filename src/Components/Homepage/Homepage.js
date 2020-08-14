import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import {
  Title,
  TitleWrapper,
  Subtitle,
  SubtitleWrapper,
  ContactWrapper,
} from "./Homepage.components";

const Homepage = () => {
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row>
        <Navbar />
      </Row>
      <Row>
        <Col xs={12} xl={8} l={6}>
          <TitleWrapper>
            <Title>
              My name is Abai. I am a Front-end developer based in London.
            </Title>
          </TitleWrapper>
        </Col>
      </Row>
      <Row>
        <Col>
          <SubtitleWrapper>
            <Subtitle>
              I am a hard working, fast learning, passionate developer with
              experience in the FinTech sector.
              <br />
              My goal is to become <span>financially independent</span> from the
              products I create.
              <br />
              This website will be an ongoing project to showcase my ideas and
              interests.
            </Subtitle>
          </SubtitleWrapper>
        </Col>
      </Row>
      <Row>
        <Col>
          <ContactWrapper>
            <span>
              <strong>Contact:</strong>
            </span>
            <span>Abaiedmund@gmail.com</span>
            <span>
              <a href="https://www.linkedin.com/in/abai-edmund-06b711141">
                Linkedin
              </a>
            </span>
          </ContactWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
