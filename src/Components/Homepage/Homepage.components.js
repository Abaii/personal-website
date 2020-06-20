import styled from 'styled-components';

export const TitleWrapper = styled.section`
          margin-top: 40px;
         @media (min-width: 768px) {
           padding-left: 80px;
           margin-top: 100px;
         }
       `;
export const Title = styled.h2`
    font-size: 82px;
    letter-spacing: 2px;
    line-height: 1.2;
    font-weight: bold;
`;

export const SubtitleWrapper = styled.div`
    margin-top: 60px;

`
export const Subtitle = styled.p`
    font-size: 24px;
`;

export const SubtitleSpan = styled.span`    
    text-decoration: underline;
    text-decoration-style: dotted;
    & a, & a:hover {
        color: inherit;
        text-decoration: none;
    }
`;
