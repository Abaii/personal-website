import React from "react";
import {
  HomepageWrapper,
  Intro,
  ButtonWrapper,
  Subtitle,
  TextWrapper,
} from "./Homepage.components";
import Button from '../Buttons/Buttons';

const Homepage = () => {
  return (
    <HomepageWrapper>
      <div style={{ display: "flex" }}>
        <TextWrapper>
          <Intro>Hello,</Intro>
          <Subtitle>
            I am a lover of functional programming working at a FinTech in
            London. Currently using React and Typescript. Open to roles in
            Berlin (Ich werde gerne meine Deutsch zu üben🇩🇪) and London. Sound
            interesting? Get in touch.
          </Subtitle>
          <span>Contact me: abaiedmund@gmail.com</span>
        </TextWrapper>
        
      </div>
    </HomepageWrapper>
  );
};

export default Homepage;
