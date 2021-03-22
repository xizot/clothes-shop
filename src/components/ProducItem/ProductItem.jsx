import React from "react";
import {
    Item,
    ItemBasisPrice,
    ItemGutter,
    ItemHover,
    ItemHoverIcon,
    ItemImg,
    ItemLabel,
    ItemPrice,
    ItemSalePrice,
    ItemTitle,
} from "./ProductItem.elements";
import { FaEye, FaHeart, FaCartPlus } from "react-icons/fa";

function ProductItem({ id, name, imgSrc, price, salePrice, isSale = false }) {
    return (
        <Item id={id}>
            <ItemGutter>
                <ItemImg>
                    <img src={imgSrc} alt="" />
                    <ItemHover>
                        <ItemHoverIcon>
                            <FaEye />
                        </ItemHoverIcon>
                        <ItemHoverIcon>
                            <FaHeart />
                        </ItemHoverIcon>
                        <ItemHoverIcon>
                            <FaCartPlus />
                        </ItemHoverIcon>
                    </ItemHover>
                    {isSale ? <ItemLabel>Sale</ItemLabel> : <></>}
                </ItemImg>
                <ItemTitle to={`product/${id}`}>{name}</ItemTitle>
                <ItemPrice>
                    <ItemBasisPrice isSale={isSale}>{price}$</ItemBasisPrice>
                    {(isSale && (
                        <ItemSalePrice>{salePrice}$</ItemSalePrice>
                    )) || <></>}
                </ItemPrice>
            </ItemGutter>
        </Item>
    );
}

export default ProductItem;
