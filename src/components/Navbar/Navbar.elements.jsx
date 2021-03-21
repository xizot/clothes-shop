import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../GlobalStyle";

import { FaVaadin } from "react-icons/fa";
import { COLOR, DEVICE } from "../../constants";

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
    @media only screen and (max-width: ${DEVICE.IPADPRO}) {
        background-color: #101522;
    }
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    ${Container}
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;
export const NavIcon = styled(FaVaadin)`
    margin-right: 5px;
`;
export const MobileIcon = styled.div`
    display: none;
    @media only screen and (max-width: ${DEVICE.IPADPRO}) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 65%);
        font-size: 2.8rem;
        cursor: pointer;
    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    @media only screen and (max-width: ${DEVICE.IPADPRO}) {
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({ click }) => (click ? 0 : "-100%")};
        transition: left 0.6s;
        background-color: #101522;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    transition: border-bottom-color 0.5s;
    &:hover {
        border-bottom-color: ${COLOR.PRIMARY};
    }
    @media only screen and (max-width: ${DEVICE.IPADPRO}) {
        width: 100%;
        &:hover {
            border: none;
        }
    }
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-size: 1.6rem;
    @media only screen and (max-width: ${DEVICE.IPADPRO}) {
        justify-content: center;
    }
`;

export const NavItemBtn = styled.ul`
    @media screen and (max-width: ${DEVICE.IPADPRO}) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;
export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`;
