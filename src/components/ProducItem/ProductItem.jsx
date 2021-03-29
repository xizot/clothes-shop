import React, { useState } from "react";
import { Button, Container } from "./../../GlobalStyle";

import {
    Item,
    ItemAction,
    ItemActionQuantity,
    ItemAngelLeft,
    ItemAngelRight,
    ItemBasisPrice,
    ItemCurrentQuantity,
    ItemDescription,
    ItemGutter,
    ItemHover,
    ItemHoverIcon,
    ItemImg,
    ItemInfo,
    ItemInfoPrice,
    ItemInfoPriceText,
    ItemInfoRated,
    ItemLabel,
    ItemLink,
    ItemModal,
    ItemModalContent,
    ItemPrice,
    ItemSalePrice,
    ItemSubImages,
    ItemSubImg,
    ItemTitle,
} from "./ProductItem.elements";
import { FaEye, FaHeart, FaCartPlus } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
};
function ProductItem({
    id,
    name,
    imgSrc,
    price,
    salePrice,
    isSale = false,
    rated,
    description,
    quantity,
    subImages,
}) {
    const [currentQuantity, setCurrentQuantity] = useState(1);
    const handleQuantity = (value) => setCurrentQuantity(value);
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <>
            <Item id={id}>
                <ItemGutter>
                    <ItemImg>
                        <img src={imgSrc} alt="" />
                        <ItemHover>
                            <ItemHoverIcon onClick={() => setIsOpenModal(true)}>
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
                    <ItemLink to={`product/${id}`}>
                        <ItemTitle>{name}</ItemTitle>
                    </ItemLink>
                    <ItemPrice>
                        <ItemBasisPrice isSale={isSale}>
                            {price}$
                        </ItemBasisPrice>
                        {(isSale && (
                            <ItemSalePrice>{salePrice}$</ItemSalePrice>
                        )) || <></>}
                    </ItemPrice>
                </ItemGutter>
            </Item>
            <ItemModal
                isOpenModal={isOpenModal}
                onClick={() => setIsOpenModal(false)}
            >
                <Container>
                    <ItemModalContent onClick={(e) => e.stopPropagation()}>
                        <ItemSubImages {...settings}>
                            {subImages && subImages.length ? (
                                subImages.map((item, index) => (
                                    <ItemSubImg src={item} key={index} />
                                ))
                            ) : (
                                <></>
                            )}
                        </ItemSubImages>
                        <ItemInfo>
                            <ItemTitle>{name}</ItemTitle>
                            <ItemInfoPrice>
                                <ItemInfoPriceText isSale={isSale}>
                                    {price}$
                                </ItemInfoPriceText>
                                {(isSale && (
                                    <ItemInfoPriceText>
                                        {salePrice}$
                                    </ItemInfoPriceText>
                                )) || <></>}
                            </ItemInfoPrice>
                            <ItemInfoRated>Rated: {rated}</ItemInfoRated>
                            <ItemDescription>{description}</ItemDescription>
                            <ItemAction>
                                <IconContext.Provider
                                    value={{
                                        color: "#ddd",
                                        fontSize: "1.6rem",
                                        height: "100%",
                                    }}
                                >
                                    <section>
                                        <ItemActionQuantity>
                                            <ItemAngelLeft
                                                onClick={() =>
                                                    handleQuantity(
                                                        currentQuantity > 1
                                                            ? currentQuantity -
                                                                  1
                                                            : currentQuantity
                                                    )
                                                }
                                            />
                                            <ItemCurrentQuantity
                                                style={{ height: "100%" }}
                                            >
                                                {currentQuantity}
                                            </ItemCurrentQuantity>
                                            <ItemAngelRight
                                                onClick={() =>
                                                    handleQuantity(
                                                        currentQuantity + 1
                                                    )
                                                }
                                            />
                                        </ItemActionQuantity>
                                    </section>
                                </IconContext.Provider>
                                <Button primary>Add to cart</Button>
                            </ItemAction>
                        </ItemInfo>
                    </ItemModalContent>
                </Container>
            </ItemModal>
        </>
    );
}

export default ProductItem;
