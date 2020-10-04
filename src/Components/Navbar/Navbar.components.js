import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 10px;
  border-bottom: 1px solid #101419;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-self: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-right: 16px;
  flex-wrap: nowrap;
`;

export const Logo = styled.div`
  background-color: #383b3f;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  color: #fbfbfa;
  display: flex;
  justify-content: center;
  align-items: center;
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
  transition: opacity 0.2s linear;
  text-decoration: none;
  margin: 0 20px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
`;

export const ColorModeWrapper = styled.div`
  display: flex;
`;
