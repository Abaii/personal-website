import styled, { css } from 'styled-components';
import Logo from '../../photos/rocks.JPG'
import seaside from '../../photos/seasideHome.JPG'

const sharedStyles = css`
  height: 25%;
  width: 25%;
  background-size: cover;
  background-position: center;
  transition: all 1s ease-in;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;


export const PhotoWrapper = styled.div`
    background: url(${({ imageUrl }) => imageUrl});
    ${sharedStyles}
    top: 0;
    left: 100px;
         
`;

export const SeaSideHome = styled.div`
    background: url(${seaside});
    ${sharedStyles};
    top: 0;
    right: 0px;
`;