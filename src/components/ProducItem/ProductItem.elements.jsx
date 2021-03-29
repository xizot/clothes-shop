import { FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import { COLOR, DEVICE } from "../../constants";
import { Button } from "../../GlobalStyle";

export const ItemBasisPrice = styled.p`
    background: black;
    text-decoration: ${({ isSale }) => (isSale ? "line-through" : "none")};
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 1px;
        border-width: 11px;
        border-style: solid;
        transform: translateX(-100%);
        border-color: transparent black black transparent;
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 1px;
        border-width: 11px;
        border-style: solid;
        transform: translateX(100%);
        border-color: transparent transparent black black;
    }
`;
export const ItemSalePrice = styled.p`
    background: ${COLOR.PRIMARY};
    margin-left: 32px;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 1px;
        border-width: 11px;
        border-style: solid;
        transform: translateX(-100%);
        border-color: ${COLOR.PRIMARY} ${COLOR.PRIMARY} transparent transparent;
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 1px;
        border-width: 11px;
        border-style: solid;
        transform: translateX(100%);
        border-color: ${COLOR.PRIMARY} transparent transparent ${COLOR.PRIMARY};
    }
`;
export const ItemPrice = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.6rem;
    color: #fff;
    ${ItemSalePrice}, ${ItemBasisPrice} {
        position: relative;
        height: 22px;
        line-height: 22px;
        padding: 0 10px;
    }
`;

export const ItemTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 600;
    color: #333;
    transition: color 0.5s;
`;

export const ItemLink = styled(Link)`
    text-align: center;
    display: block;
    margin-bottom: 10px;
    text-decoration: none;
    &:hover {
        ${ItemTitle} {
            color: ${COLOR.PRIMARY};
        }
    }
`;
export const ItemHoverIcon = styled.span`
    font-size: 1.8rem;
    width: 45px;
    height: 35px;
    line-height: 40px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    svg {
        transition: all 0.5s;
    }
    &:not(:last-child) {
        border-right: 2px solid #ddd;
    }
    &:hover {
        svg {
            transform: translateY(-5px);
        }
    }
`;

export const ItemHover = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    padding: 7px 4px;
    background: white;
    opacity: 0;
    transition: opacity 0.5s;
`;

export const ItemLabel = styled.span`
    font-size: 1.3rem;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    padding: 0 10px;
    background-color: #000;
    height: 25px;
    line-height: 25px;
    white-space: nowrap;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        border-width: 12.5px;
        border-style: solid;
        border-color: #000 #000 transparent transparent;
        transform: translateX(-100%);
    }
`;
export const ItemImg = styled.div`
    position: relative;
    width: 100%;
    height: 350px;
    background-color: #ddd;
    margin-bottom: 20px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        transition: transform 0.5s;
    }
    &:hover {
        ${ItemHover} {
            opacity: 1;
        }
        img {
            transform: scale(1.2);
        }
    }
`;

export const ItemGutter = styled.section`
    position: relative;
`;
export const Item = styled.section``;

// ▼ITEM MODEL▼

export const ItemAction = styled.section`
    display: flex;
    align-items: center;
    ${Button} {
        margin-left: 20px;
    }
`;
export const ItemCurrentQuantity = styled.p`
    font-size: 1.4rem;
    color: #333;
    opacity: 0.8;
`;
export const ItemInfoPriceText = styled.section`
    color: #333;
    display: inline;
    font-size: 2rem;
    text-decoration: ${({ isSale }) => (isSale ? "line-through" : "none")};
    opacity: ${({ isSale }) => (isSale ? "0.4" : "1")};
`;
export const ItemInfoPrice = styled.section`
    margin-bottom: 20px;
`;
export const ItemInfoRated = styled.p`
    font-size: 1.6rem;
    margin-bottom: 20px;
`;
export const ItemDescription = styled.p`
    font-size: 1.4rem;
    line-height: 1.5;
    color: #333;
    opacity: 0.8;
    margin-bottom: 20px;
`;

export const ItemAngelLeft = styled(FaAngleLeft)``;
export const ItemAngelRight = styled(FaAngleRight)``;

export const ItemActionQuantity = styled.section`
    display: flex;
    align-items: center;
    ${ItemAngelLeft}, ${ItemAngelRight} {
        font-size: 1.6rem;
        margin: 0 10px;
        display: inline-block;
        cursor: pointer;
    }
`;
export const ItemSubImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ItemModal = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;

    opacity: ${({ isOpenModal }) => (isOpenModal ? 1 : 0)};
    pointer-events: ${({ isOpenModal }) => (isOpenModal ? "all" : "none")};
    transition: opacity 0.5s ease;
    @media only screen and (max-width: ${DEVICE.IPAD}) {
        overflow: scroll;
        display: block;
    }
`;

export const ItemSubImagesSlide = styled.section`
    display: block !important;
`;
export const ItemSubImages = styled.section`
    width: 50%;

    @media only screen and (max-width: ${DEVICE.IPAD}) {
        width: 100%;
    }
`;
export const ItemSubImagesSlider = styled(Slider)``;
export const ItemInfo = styled.section`
    width: 50%;
    padding: 80px 50px;
    @media only screen and (max-width: ${DEVICE.IPAD}) {
        width: 100%;
    }
    ${ItemTitle} {
        margin-bottom: 20px;
    }
`;

export const ItemModalContent = styled.section`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    @media only screen and (max-width: ${DEVICE.IPAD}) {
        margin: 100px 0;
    }
`;
export const ItemClose = styled(FaTimes)`
    font-size: 3rem;
    color: #cecece;
    position: absolute;
    z-index: 1;
    top: 20px;
    right: 20px;
    cursor: pointer;
    @media only screen and (max-width: ${DEVICE.IPAD}) {
        font-size: 2.5rem;
        color: #fff;
    }
`;
// ▲ITEM MODEL▲
