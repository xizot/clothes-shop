import styled from "styled-components";
import Slider from "react-slick";
import { Button1, Container } from "../../GlobalStyle";
import { DEVICE } from "../../constants";
export const MainvisualSection = styled.section`
    width: 100%;
    position: fixed;

    top: 0;
    left: 0;
`;

export const MainvisualSliderItem = styled.div`
    position: relative;
    height: ${({ fullheight }) => (fullheight ? fullheight + "px" : "100vh")};
    background: ${({ imgSrc }) => (imgSrc ? `url(${imgSrc})` : "red")};
    outline: none;
    display: flex !important;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const MainvisualItemHeading = styled.h3`
    font-size: 5rem;
    letter-spacing: 20px;
    font-weight: bolder;
    color: #fff;
    position: relative;
    z-index: 1;
    left: 150%;
    transition: left 0.5s;
    transition-delay: 0.5s;
    @media only screen and (max-width: ${DEVICE.IPAD}) {
        font-size: 3rem;
        letter-spacing: 10px;
    }
`;

export const MainvisualText = styled.p`
    font-size: 2rem;
    letter-spacing: 5px;
    color: #fff;
    position: relative;
    z-index: 1;
    left: -100%;
    transition: left 0.5s;
    transition-delay: 0.5s;
    @media only screen and (max-width: ${DEVICE.IPAD}) {
        font-size: 1.8rem;
        letter-spacing: 2.5px;
    }
`;
export const MainvisualItem = styled.div`
    width: 100%;
    & ${Button1} {
        left: -100%;
        transition: left 0.5s;
        transition-delay: 0.5s;
    }
    & ${MainvisualItemHeading}, & ${MainvisualText} {
        margin-bottom: 30px;
        @media only screen and (max-width: ${DEVICE.IPAD}) {
            margin-bottom: 15px;
        }
    }
`;

export const MainvisualSlider = styled(Slider)`
    z-index: 1;
    & ${Container} {
        overflow: hidden auto;
    }
    & .slick-active {
        ${MainvisualItemHeading} ,${MainvisualText},${Button1} {
            left: 0;
        }
    }
`;
