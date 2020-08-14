import styled from "styled-components";

export const TitleWrapper = styled.section`
  display: flex;
  padding-top: 50px;
  margin-left: 50px;
`;
export const Title = styled.h2`
  font-size: 56px;
  letter-spacing: 2px;
  line-height: 1.2;
  font-weight: 200;
  
  span {
    font-weight: bold;
  }
`;

export const Capital = styled.span`
  font-size: 10vw;
`

export const SubtitleWrapper = styled.div`
    display: flex;
    margin: 50px;

`;
export const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 200;
  line-height: 1.6;
  span {
      font-weight: bold;
  }
`;

export const ContactWrapper = styled.div`
         display: flex;
         flex-direction: column;

         margin-left: 50px;
         span:first-child {
           font-weight: 900;
         }
         span {
           font-size: 24px;
           font-weight: 300;
           margin-top: 20px;
         }

         span a {
             color: inherit;
             text-decoration: underline;
             cursor: pointer;
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
