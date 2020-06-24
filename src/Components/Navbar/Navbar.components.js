import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 30px;
  color: #82a7a6;
  flex-wrap: wrap;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: space-between;
  align-self: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-right: 16px;
  flex-wrap: nowrap;
`;

export const Logo = styled.div`
  /* clip-path: polygon(40% 0, 60% 0, 99% 100%, 75% 100%, 60% 80%, 40% 80%, 25% 100%, 0 100%);  logo is A */
  /* clip-path: polygon(
           26% 55%,
           21% 31%,
           100% 13%,
           100% 0,
           12% 0,
           0 100%,
           100% 100%,
           100% 88%,
           15% 78%,
           22% 68%,
           88% 78%,
           81% 32%
         ); this is an E */
  /* clip-path: polygon(
           0 0,
           100% 0,
           0% 23%,
           100% 23%,
           0 46%,
           100% 46%,
           0 69%,
           100% 69%,
           0 92%
         ); this one is 4 triangles */
  clip-path: polygon(
    18% 18%,
    0 93%,
    17% 92%,
    30% 30%,
    67% 21%,
    71% 75%,
    20% 77%,
    16% 93%,
    90% 92%,
    81% 1%
  );
  /* clip-path: polygon(
           11% 11%,
           63% 50%,
           55% 11%,
           100% 100%,
           10% 55%,
           50% 63%
         ); arrow */
  /* clip-path: polygon(13% 9%, 39% 18%, 43% 0, 100% 100%, 0 35%, 22% 34%);  umbrella */
  height: 30px;
  color: inherit;
  background-color: ${({ color }) => color && `${color}`};
  width: 30px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavButton = styled.button`
  border: none;
  color: inherit;
  background: none;
  padding: 0 10px;
  font-size: 18px;
  transition: all 1s ease-in;
  text-decoration: none;
  margin: 0 20px;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
  &:focus {
    outline: none;
  }
`;

export const ColorModeWrapper = styled.div`
  display: flex;
`;
