import styled, { css } from 'styled-components';
import Logo from '../../photos/rocks.JPG'
import seaside from '../../photos/seasideHome.JPG'

const sharedStyles = css`
  height: 600px;
  width: 600px;
  background-size: 600px;
  background-repeat: no-repeat;
  position: absolute;
  z-index: -1;
  transition: all 1s ease-in;
  opacity: 0.8;
  &:hover{
      opacity: 1;
  }
`;
export const PhotoWrapper = styled.div`
    background: url(${Logo});
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