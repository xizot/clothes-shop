import styled, { createGlobalStyle } from "styled-components";
import { DEVICE, COLOR } from "./constants";
export const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family:'Source Sans Pro', sans-serif
    }
    html{
        font-size: 62.5%;
    }

`;

export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding: 0 50px;
    @media only screen and (max-width: ${DEVICE.IPAD}) {
        padding: 0 35px;
    }
    @media only screen and (max-width: ${DEVICE.IPHONE}) {
        padding: 0 15px;
    }
`;

export const Button = styled.button`
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
    background: ${({ primary }) => (primary ? COLOR.PRIMARY : "#fff")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
    color: #fff;
    font-size: ${({ fontBig }) => (fontBig ? "2rem" : "1.6rem")};
    outline: none;
    transition: all 0.5s;

    &:hover {
        color: ${({ primary }) => (primary ? COLOR.PRIMARY : "#333")};
        background: #fff;
        background: ${({ primary }) => (primary ? "#fff" : COLOR.PRIMARY)};
        border-color: ${({ primary }) =>
            primary ? COLOR.PRIMARY : "transparent"};
    }
    @media only screen and (max-width: ${DEVICE.IPAD}) {
        width: 100%;
    }
`;

export const Button1 = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background: transparent;
    white-space: nowrap;
    padding: ${({ big }) => (big ? "12px 0" : "10px 0")};
    color: ${({ primary }) => (primary ? COLOR.PRIMARY : "#fff")};
    font-size: ${({ fontBig }) => (fontBig ? "2rem" : "1.6rem")};
    outline: none;
    text-align: left;
    transition: color 0.5s;
    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 20%;
        height: 2px;
        background-color: ${({ primary }) =>
            primary ? COLOR.PRIMARY : "#fff"};
        z-index: 1;
        transition: background-color 0.5s, width 0.5s;
    }
    &:hover {
        color: ${({ primary }) => (primary ? "#fff" : COLOR.PRIMARY)};
        &::before {
            width: 100%;
            background-color: ${COLOR.PRIMARY};
        }
    }
    @media only screen and (max-width: ${DEVICE.IPAD}) {
        font-size: 1.4rem;
    }
`;
export const OverLayer = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    pointer-events: none;
`;
