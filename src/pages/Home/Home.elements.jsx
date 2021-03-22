import styled from "styled-components";
export const BlankSpace = styled.span`
    position: relative;
    display: block;
    height: ${({ fullheight }) => (fullheight ? fullheight + "px" : "100vh")};
    pointer-events: none;
    opacity: 0;
    z-index: -1;
`;
export const Title = styled.h3`
    font-size: 3.6rem;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
`;
export const SubTitle = styled.p`
    font-size: 1.6rem;
    letter-spacing: 0.54px;
    color: #333;
    opacity: 0.8;
    line-height: 1.5;
    text-align: center;
    width: 500px;
    margin: 0 auto 50px;
    max-width: 100%;
`;
export const HomeProduct = styled.section`
    background-color: #ddd;
    padding-top: 100px;
`;

export const HomeContent = styled.section`
    position: relative;
    z-index: 1;
`;
