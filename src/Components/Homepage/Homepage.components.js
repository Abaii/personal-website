import styled from "styled-components";

export const HomepageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 15px;
  flex: 9999;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Intro = styled.h1`
  font-size: 5vw;
  line-height: 1;
  letter-spacing: 4px;
`;

export const Subtitle = styled.span`
  font-size: 2vw;
  font-weight: bold;
  margin-right: 25%;
  opacity: 0.7;
`

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
  button {
    margin-left: 20px;
  }
`;

export const TextWrapper = styled.div`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  span {
    opacity: 0.8;
    font-size: 4vw;
    margin-top: 20px;
  }
  @media (min-width: 768px) {
    max-width: 50%;
    padding-left: 15px;
    span {
      font-size: 1.5vw;
    }
  }
`;