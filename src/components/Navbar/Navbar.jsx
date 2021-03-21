import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavBtnLink,
    NavIcon,
    NavItem,
    NavItemBtn,
    NavLinks,
    NavLogo,
    NavMenu,
} from "./Navbar.elements";
import { Button } from "../../GlobalStyle";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const showButton = () => {
        if (window.innerWidth <= 1200) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);
    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon />
                        VICTORY
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to="/">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/product">Product</NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-up">
                                    <Button
                                        onClick={handleClick}
                                        primary
                                        fontBig
                                    >
                                        SIGN UP
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                        <NavItem>
                            <NavLinks to="/sign-in">Sign In</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    );
}

export default Navbar;
