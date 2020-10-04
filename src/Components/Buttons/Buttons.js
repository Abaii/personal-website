import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: #041814;
  min-width: 150px;
  min-height: 50px;
  background: transparent;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 10px;
  font-weight: 800;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease-in;
  transform: none;

  :hover {
    transform: translateY(-10px);
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.2);
  }
  span {
    font-size: 20px;
    font-weight: 400;
  }
`;

const Button = ({ onClick, text, ...rest }) => 
    <StyledButton onClick={onClick} {...rest}><span>{text}</span></StyledButton>


export default Button;