import React, { useState } from "react";
import { NavButton } from "../Navbar/Navbar.components";

export const ColourSwitch = () => {
  const [color, setColor] = useState("rgb(238, 226, 223)");
  const [colorLabel, setColorLabel] = useState("Dark mode");
  const [textColor, setTextColor] = useState("rgb(19, 51, 22)");

  const colors = {
    lightMode: "rgb(238, 226, 223)",
    darkMode: "rgb(19, 51, 22)",
  };
  const changeColour = () => {
    color === colors.lightMode
      ? setColor(colors.darkMode)
      : setColor(colors.lightMode);
    color === colors.lightMode
      ? setColorLabel("Dark mode")
      : setColorLabel("Light mode");
    color === colors.lightMode
      ? setTextColor(colors.lightMode)
      : setTextColor(colors.darkMode);

    document.body.style.color = textColor;
    document.body.style.backgroundColor = color;
  };

  return <NavButton onClick={changeColour}>{colorLabel}</NavButton>;
};

export default ColourSwitch;
