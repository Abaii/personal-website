import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import {
  Title,
  TitleWrapper,
  Subtitle,
  SubtitleSpan,
  SubtitleWrapper,
  SocialMediaLinks,
} from "./Homepage.components";
import PhotoGrid from "../PhotoGrid/PhotoGrid";

const Homepage = () => {
  return (
    <Container fluid>
      <Row>
        <Navbar />
      </Row>
      <Row>
        <Col xs={{ span: 4, offset: 4 }}>
          <TitleWrapper>
            <Title>
              I am a<br />
              <span>Front-end developer</span>
              <br />
              based in London.
            </Title>
            {/* <SocialMediaLinks>
              <span>Github</span>
              <span>|</span>
              <span>Twitter</span>
              <span>|</span>
              <span>Github</span>
            </SocialMediaLinks> */}
          </TitleWrapper>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={3}>
          <SubtitleWrapper>
            <Subtitle>
              Currently working for{" "}
              <SubtitleSpan>
                <a
                  href="https://equalsmoney.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Equals
                </a>
              </SubtitleSpan>
            </Subtitle>
          </SubtitleWrapper>
        </Col>
      </Row>
      {/* <Row className={"position-relative"}>
          <PhotoGrid />
        </Row> */}
    </Container>
  );
};

export default Homepage;
