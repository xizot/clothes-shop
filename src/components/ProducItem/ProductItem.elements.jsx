import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../../constants";
export const ItemBasisPrice = styled.p`
    background: black;
    text-decoration: ${({ isSale }) => (isSale ? "line-through" : "none")};
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        border-width: 11px;
        border-style: solid;
        transform: translateX(-100%);
        border-color: transparent black black transparent;
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
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
        left: 0;
        border-width: 11px;
        border-style: solid;
        transform: translateX(-100%);
        border-color: ${COLOR.PRIMARY} ${COLOR.PRIMARY} transparent transparent;
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
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

export const ItemTitle = styled(Link)`
    font-size: 1.8rem;
    font-weight: 600;
    color: #333;
    transition: color 0.5s;
    text-align: center;
    display: block;
    margin-bottom: 10px;
    &:hover {
        color: ${COLOR.PRIMARY};
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
export const Item = styled.div``;
