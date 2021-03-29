import styled, { keyframes } from "styled-components";
export const LoadingWrapper = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 9999;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const moveRight = keyframes`
    0%{
        width: 0%;
    }
    100%{
        width: 100%;
    }
`;
export const LoadingLine = styled.span`
    display: block;
    position: relative;
    width: 300px;
    height: 2px;
    background-color: transparent;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: #fff;
        animation: ${moveRight} 2s linear forwards;
    }
`;
