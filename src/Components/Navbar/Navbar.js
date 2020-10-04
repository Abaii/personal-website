import React from "react";
import {
  HeaderWrapper,
  TitleWrapper,
  Title,
  Logo,
  LinkWrapper,
  NavButton,
  ColorModeWrapper,
} from "./Navbar.components";
import ColourSwitch from "../ColourSwitch/ColourSwitch";

const Navbar = () => {
  const sections = ["Home", "Projects"];
  return (
    <HeaderWrapper>
      <Logo>AE</Logo>
      <span>Abai Edmund</span>
      <LinkWrapper>
        {sections.map((section) => (
          <NavButton>{section}</NavButton>
        ))}
      </LinkWrapper>
    </HeaderWrapper>
  );
};

export default Navbar;
