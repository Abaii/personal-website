import React from 'react';
import { HeaderWrapper, TitleWrapper, Title, Logo, LinkWrapper, NavButton, ColorModeWrapper} from './Navbar.components';
import ColourSwitch from "../ColourSwitch/ColourSwitch";

const Navbar = () => {
    const sections = ["Home", "About", "Projects"]
    return (
        <HeaderWrapper>
            <TitleWrapper>
                <Title>Abai <br/> Edmund</Title>
                <Logo color="green" />
            </TitleWrapper>
            <LinkWrapper>
                {sections.map((section) => <NavButton>{section}</NavButton>)}
                <ColorModeWrapper>
                    <ColourSwitch/>
                </ColorModeWrapper>
            </LinkWrapper>
        </HeaderWrapper>
    )
};

export default Navbar;