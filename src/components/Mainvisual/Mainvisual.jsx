import React from "react";
import { Button1, Container, OverLayer } from "../../GlobalStyle";

import {
    MainvisualItem,
    MainvisualItemHeading,
    MainvisualSection,
    MainvisualSlider,
    MainvisualSliderItem,
    MainvisualText,
} from "./Mainvisual.elements";

import { MainVisualData } from "./Data";
import { Link } from "react-router-dom";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
};

function Mainvisual() {
    return (
        <MainvisualSection>
            <MainvisualSlider {...settings}>
                {MainVisualData && MainVisualData.length ? (
                    MainVisualData.map((item, index) => (
                        <MainvisualSliderItem key={index} imgSrc={item.imgSrc}>
                            <OverLayer />
                            <MainvisualItem>
                                <Container>
                                    <MainvisualText>
                                        From ${item.price}
                                    </MainvisualText>

                                    <MainvisualItemHeading>
                                        {item.title}
                                    </MainvisualItemHeading>
                                    <Link to={item.link}>
                                        <Button1>Shop Now</Button1>
                                    </Link>
                                </Container>
                            </MainvisualItem>
                        </MainvisualSliderItem>
                    ))
                ) : (
                    <></>
                )}
            </MainvisualSlider>
        </MainvisualSection>
    );
}

export default Mainvisual;
