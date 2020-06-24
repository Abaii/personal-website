import styled from "styled-components";

export const TitleWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;
export const Title = styled.h2`
  font-size: 3vw;
  letter-spacing: 2px;
  line-height: 1.2;
  font-weight: 200;

  span {
    font-size: 10vw;
    text-transform: uppercase;
    font-weight: 900;
  }
`;

export const SubtitleWrapper = styled.div`
  margin-top: 60px;
`;
export const Subtitle = styled.p`
  font-size: 24px;
`;

export const SubtitleSpan = styled.span`
  text-decoration: underline;
  text-decoration-style: dotted;
  & a,
  & a:hover {
    color: inherit;
    text-decoration: none;
  }
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 100px;
  span {
    writing-mode: vertical-rl;
    color: #ff0;
  }
`;
