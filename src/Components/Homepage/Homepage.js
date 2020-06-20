import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import { Title, TitleWrapper, Subtitle, SubtitleSpan, SubtitleWrapper } from './Homepage.components';
import PhotoGrid from '../PhotoGrid/PhotoGrid';


const Homepage = () => {
    return (
      <Container>
        <Row>
          <Navbar />
        </Row>
        <Row>
          <TitleWrapper>
            <Title>
              Hello, my name is Abai Edmund. I am a Front-end developer based in
              London.
            </Title>
          </TitleWrapper>
        </Row>

        <Row>
          <SubtitleWrapper>
            <Subtitle>
              Currently working for{" "}
              <SubtitleSpan>
                <a href="https://equalsmoney.com/" target="_blank">
                  Equals
                </a>
              </SubtitleSpan>
            </Subtitle>
          </SubtitleWrapper>
        </Row>
        {/* <Row className={"position-relative"}>
          <PhotoGrid />
        </Row> */}
      </Container>
    );
};

export default Homepage;